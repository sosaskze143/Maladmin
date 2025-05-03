function search() {
  const q = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("results");
  const history = JSON.parse(localStorage.getItem("transfers") || "[]");
  const filtered = history.filter(op => op.serial === q || q === "");

  if (filtered.length === 0) {
    resultsDiv.innerHTML = "لا توجد نتائج.";
    return;
  }

  let html = "<table border='1'><tr><th>رقم</th><th>من</th><th>إلى</th><th>تاريخ</th><th>رمز الموافقة</th></tr>";
  filtered.forEach(op => {
    html += `<tr><td>${op.serial}</td><td>${op.from}</td><td>${op.to}</td><td>${op.date}</td><td>${op.approvalCode}</td></tr>`;
  });
  html += "</table>";
  resultsDiv.innerHTML = html;
}

function downloadCSV() {
  const history = JSON.parse(localStorage.getItem("transfers") || "[]");
  if (history.length === 0) return alert("لا يوجد سجل.");

  let csv = "رقم العملة,من,إلى,تاريخ,رمز الموافقة\n";
  history.forEach(op => {
    csv += `${op.serial},${op.from},${op.to},${op.date},${op.approvalCode}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "transfer_log.csv";
  a.click();
}
