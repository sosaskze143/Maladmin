const form = document.getElementById("transferForm");
const alertBox = document.getElementById("alert");
const ADMIN_CODE = "143143";

function generateApprovalCode() {
  let code;
  do {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  } while (usedCodes().includes(code));
  return code;
}

function usedCodes() {
  const history = JSON.parse(localStorage.getItem("transfers") || "[]");
  return history.map(op => op.approvalCode);
}

function saveTransfer(serial, from, to, approvalCode) {
  const history = JSON.parse(localStorage.getItem("transfers") || "[]");
  history.push({
    serial,
    from,
    to,
    approvalCode,
    date: new Date().toLocaleString()
  });
  localStorage.setItem("transfers", JSON.stringify(history));
}

function generatePDF(serial, value, from, to, approvalCode) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.text("تفاصيل نقل ملكية العملة", 20, 20);
  doc.text(`رقم العملة: ${serial}`, 20, 30);
  doc.text(`الفئة: ${value} ريال`, 20, 40);
  doc.text(`المالك السابق: ${from}`, 20, 50);
  doc.text(`المالك الجديد: ${to}`, 20, 60);
  doc.text(`التاريخ: ${new Date().toLocaleString()}`, 20, 70);
  doc.text(`رمز الموافقة: ${approvalCode}`, 20, 80);
  doc.save(`نقل_${serial}.pdf`);
}

form.onsubmit = function (e) {
  e.preventDefault();
  const serial = document.getElementById("serial").value.trim();
  const newOwner = document.getElementById("newOwner").value;
  const adminCode = document.getElementById("adminCode").value;

  if (adminCode !== ADMIN_CODE) {
    alertBox.textContent = "رمز إداري غير صحيح!";
    alertBox.className = "error";
    return;
  }

  if (!currencyData[serial]) {
    alertBox.textContent = "رقم العملة غير موجود.";
    alertBox.className = "error";
    return;
  }

  const from = currencyData[serial].owner;
  const value = currencyData[serial].value;
  currencyData[serial].owner = newOwner;
  const code = generateApprovalCode();
  saveTransfer(serial, from, newOwner, code);
  generatePDF(serial, value, from, newOwner, code);

  alertBox.textContent = `تم النقل. رمز الموافقة: ${code}`;
  alertBox.className = "success";
  form.reset();
};
