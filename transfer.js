// العملات الـ100 المسبقة (لا يمكن الإضافة عليها)
const initialCurrencies = [
  // 10 × 1 ريال
  { id: "143-10234", value: 1, owner: "الحكومة" },
  { id: "143-58392", value: 1, owner: "الحكومة" },
  { id: "143-94123", value: 1, owner: "الحكومة" },
  { id: "143-78102", value: 1, owner: "الحكومة" },
  { id: "143-60518", value: 1, owner: "الحكومة" },
  { id: "143-19384", value: 1, owner: "الحكومة" },
  { id: "143-34987", value: 1, owner: "الحكومة" },
  { id: "143-71604", value: 1, owner: "الحكومة" },
  { id: "143-82093", value: 1, owner: "الحكومة" },
  { id: "143-40219", value: 1, owner: "الحكومة" },

  // 30 × 5 ريال
  { id: "143-10394", value: 5, owner: "الحكومة" },
  { id: "143-18472", value: 5, owner: "الحكومة" },
  { id: "143-27563", value: 5, owner: "الحكومة" },
  { id: "143-39401", value: 5, owner: "الحكومة" },
  { id: "143-50938", value: 5, owner: "الحكومة" },
  { id: "143-61847", value: 5, owner: "الحكومة" },
  { id: "143-78394", value: 5, owner: "الحكومة" },
  { id: "143-80412", value: 5, owner: "الحكومة" },
  { id: "143-91824", value: 5, owner: "الحكومة" },
  { id: "143-23489", value: 5, owner: "الحكومة" },
  { id: "143-34871", value: 5, owner: "الحكومة" },
  { id: "143-19284", value: 5, owner: "الحكومة" },
  { id: "143-13984", value: 5, owner: "الحكومة" },
  { id: "143-92738", value: 5, owner: "الحكومة" },
  { id: "143-74839", value: 5, owner: "الحكومة" },
  { id: "143-62937", value: 5, owner: "الحكومة" },
  { id: "143-52938", value: 5, owner: "الحكومة" },
  { id: "143-83920", value: 5, owner: "الحكومة" },
  { id: "143-94720", value: 5, owner: "الحكومة" },
  { id: "143-03847", value: 5, owner: "الحكومة" },
  { id: "143-20384", value: 5, owner: "الحكومة" },
  { id: "143-13947", value: 5, owner: "الحكومة" },
  { id: "143-92013", value: 5, owner: "الحكومة" },
  { id: "143-09472", value: 5, owner: "الحكومة" },
  { id: "143-91283", value: 5, owner: "الحكومة" },
  { id: "143-17483", value: 5, owner: "الحكومة" },
  { id: "143-29013", value: 5, owner: "الحكومة" },
  { id: "143-39847", value: 5, owner: "الحكومة" },
  { id: "143-73829", value: 5, owner: "الحكومة" },
  { id: "143-19384", value: 5, owner: "الحكومة" },

  // 30 × 10 ريال
  { id: "143-48201", value: 10, owner: "الحكومة" },
  { id: "143-47289", value: 10, owner: "الحكومة" },
  { id: "143-39012", value: 10, owner: "الحكومة" },
  { id: "143-48294", value: 10, owner: "الحكومة" },
  { id: "143-13984", value: 10, owner: "الحكومة" },
  { id: "143-20394", value: 10, owner: "الحكومة" },
  { id: "143-39402", value: 10, owner: "الحكومة" },
  { id: "143-49284", value: 10, owner: "الحكومة" },
  { id: "143-01394", value: 10, owner: "الحكومة" },
  { id: "143-18475", value: 10, owner: "الحكومة" },
  { id: "143-10394", value: 10, owner: "الحكومة" },
  { id: "143-23948", value: 10, owner: "الحكومة" },
  { id: "143-94820", value: 10, owner: "الحكومة" },
  { id: "143-27394", value: 10, owner: "الحكومة" },
  { id: "143-39284", value: 10, owner: "الحكومة" },
  { id: "143-94013", value: 10, owner: "الحكومة" },
  { id: "143-94728", value: 10, owner: "الحكومة" },
  { id: "143-92038", value: 10, owner: "الحكومة" },
  { id: "143-39204", value: 10, owner: "الحكومة" },
  { id: "143-13948", value: 10, owner: "الحكومة" },
  { id: "143-09384", value: 10, owner: "الحكومة" },
  { id: "143-94820", value: 10, owner: "الحكومة" },
  { id: "143-12847", value: 10, owner: "الحكومة" },
  { id: "143-20138", value: 10, owner: "الحكومة" },
  { id: "143-40382", value: 10, owner: "الحكومة" },
  { id: "143-30847", value: 10, owner: "الحكومة" },
  { id: "143-57293", value: 10, owner: "الحكومة" },
  { id: "143-92013", value: 10, owner: "الحكومة" },
  { id: "143-28475", value: 10, owner: "الحكومة" },
  { id: "143-58293", value: 10, owner: "الحكومة" },

  // 20 × 50 ريال
  { id: "143-50394", value: 50, owner: "الحكومة" },
  { id: "143-69284", value: 50, owner: "الحكومة" },
  { id: "143-18374", value: 50, owner: "الحكومة" },
  { id: "143-19038", value: 50, owner: "الحكومة" },
  { id: "143-92384", value: 50, owner: "الحكومة" },
  { id: "143-83019", value: 50, owner: "الحكومة" },
  { id: "143-13847", value: 50, owner: "الحكومة" },
  { id: "143-57482", value: 50, owner: "الحكومة" },
  { id: "143-21830", value: 50, owner: "الحكومة" },
  { id: "143-42839", value: 50, owner: "الحكومة" },
  { id: "143-48204", value: 50, owner: "الحكومة" },
  { id: "143-48930", value: 50, owner: "الحكومة" },
  { id: "143-83942", value: 50, owner: "الحكومة" },
  { id: "143-92030", value: 50, owner: "الحكومة" },
  { id: "143-59048", value: 50, owner: "الحكومة" },
  { id: "143-20348", value: 50, owner: "الحكومة" },
  { id: "143-39484", value: 50, owner: "الحكومة" },
  { id: "143-95820", value: 50, owner: "الحكومة" },
  { id: "143-92010", value: 50, owner: "الحكومة" },
  { id: "143-20948", value: 50, owner: "الحكومة" },

  // 8 × 100 ريال
  { id: "143-32849", value: 100, owner: "الحكومة" },
  { id: "143-13928", value: 100, owner: "الحكومة" },
  { id: "143-94830", value: 100, owner: "الحكومة" },
  { id: "143-20438", value: 100, owner: "الحكومة" },
  { id: "143-13984", value: 100, owner: "الحكومة" },
  { id: "143-93840", value: 100, owner: "الحكومة" },
  { id: "143-30482", value: 100, owner: "الحكومة" },
  { id: "143-47283", value: 100, owner: "الحكومة" },

  // 2 × 500 ريال
  { id: "143-10001", value: 500, owner: "الحكومة" },
  { id: "143-10002", value: 500, owner: "الحكومة" }
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
