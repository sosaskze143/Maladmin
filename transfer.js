// تأكد من أنك خزنت العملات في LocalStorage أول مرة فقط
const initialCurrencies = [
  { id: "143-90281", value: 1, owner: "الحكومة" },
  { id: "143-73920", value: 1, owner: "الحكومة" },
  { id: "143-51847", value: 1, owner: "الحكومة" },
  { id: "143-68394", value: 1, owner: "الحكومة" },
  { id: "143-12468", value: 1, owner: "الحكومة" },
  { id: "143-57632", value: 1, owner: "الحكومة" },
  { id: "143-10982", value: 1, owner: "الحكومة" },
  { id: "143-49317", value: 1, owner: "الحكومة" },
  { id: "143-82094", value: 1, owner: "الحكومة" },
  { id: "143-76125", value: 1, owner: "الحكومة" },

  { id: "143-34782", value: 5, owner: "الحكومة" },
  { id: "143-65430", value: 5, owner: "الحكومة" },
  // ... (أكمل حتى 30 من فئة 5 ريال)
  { id: "143-93217", value: 10, owner: "الحكومة" },
  // ... (أكمل حتى 30 من فئة 10 ريال)
  { id: "143-84592", value: 50, owner: "الحكومة" },
  // ... (أكمل حتى 20 من فئة 50 ريال)
  { id: "143-76913", value: 100, owner: "الحكومة" },
  // ... (8 من فئة 100)
  { id: "143-61324", value: 500, owner: "الحكومة" },
  { id: "143-48207", value: 500, owner: "الحكومة" }
];

// حفظ أول مرة فقط
if (!localStorage.getItem('currencies')) {
  localStorage.setItem('currencies', JSON.stringify(initialCurrencies));
  localStorage.setItem('transfers', JSON.stringify([]));
}

document.getElementById("transferForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const id = document.getElementById("currencyId").value.trim();
  const newOwner = document.getElementById("newOwner").value;
  const adminCode = document.getElementById("adminCode").value;

  if (adminCode !== "1234") {
    showAlert("رمز إداري غير صحيح", true);
    return;
  }

  const currencies = JSON.parse(localStorage.getItem("currencies"));
  const currencyIndex = currencies.findIndex(c => c.id === id);

  if (currencyIndex === -1) {
    showAlert("رقم العملة غير موجود", true);
    return;
  }

  const oldOwner = currencies[currencyIndex].owner;
  const currencyValue = currencies[currencyIndex].value;

  currencies[currencyIndex].owner = newOwner;
  localStorage.setItem("currencies", JSON.stringify(currencies));

  const approvalCode = generateCode();
  const now = new Date().toLocaleString();

  const transfer = {
    id: id,
    value: currencyValue,
    from: oldOwner,
    to: newOwner,
    time: now,
    code: approvalCode
  };

  const transfers = JSON.parse(localStorage.getItem("transfers"));
  transfers.push(transfer);
  localStorage.setItem("transfers", JSON.stringify(transfers));

  generatePDF(transfer);
  showAlert(`تم النقل بنجاح! رمز الموافقة: ${approvalCode}`, false);
});

function showAlert(msg, isError) {
  const box = document.getElementById("alertBox");
  box.textContent = msg;
  box.style.color = isError ? "red" : "green";
}

function generateCode() {
  const existing = JSON.parse(localStorage.getItem("transfers")).map(t => t.code);
  let code;
  do {
    code = Math.floor(100000 + Math.random() * 900000).toString();
  } while (existing.includes(code));
  return code;
}

function generatePDF(transfer) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFont("Arial");
  doc.setFontSize(14);
  doc.text("تأكيد نقل ملكية عملة", 10, 20);
  doc.text(`رقم العملة: ${transfer.id}`, 10, 30);
  doc.text(`الفئة: ${transfer.value} ريال`, 10, 40);
  doc.text(`من: ${transfer.from}`, 10, 50);
  doc.text(`إلى: ${transfer.to}`, 10, 60);
  doc.text(`الوقت والتاريخ: ${transfer.time}`, 10, 70);
  doc.text(`رمز الموافقة: ${transfer.code}`, 10, 80);

  doc.save(`${transfer.id}_transfer.pdf`);
}
