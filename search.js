function search() {
  const id = document.getElementById("searchInput").value.trim();
  const currencies = JSON.parse(localStorage.getItem("currencies"));
  const transfers = JSON.parse(localStorage.getItem("transfers"));
  const currency = currencies.find(c => c.id === id);

  const resultBox = document.getElementById("resultBox");
  if (!currency) {
    resultBox.innerHTML = "<p style='color:red'>العملة غير موجودة</p>";
    return;
  }

  let history = transfers.filter(t => t.id === id);
  let html = `<p>رقم العملة: ${currency.id}</p>
              <p>الفئة: ${currency.value} ريال</p>
              <p>المالك الحالي: ${currency.owner}</p>
              <h3>سجل التحويلات:</h3>`;

  if (history.length === 0) {
    html += "<p>لا يوجد تحويلات لهذه العملة.</p>";
  } else {
    html += "<ul>";
    history.forEach(h => {
      html += `<li>${h.time}: من ${h.from} إلى ${h.to} (رمز: ${h.code})</li>`;
    });
    html += "</ul>";
  }

  resultBox.innerHTML = html;
}
