const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

document.querySelectorAll("[data-lightbox]").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const box = document.querySelector(".lightbox");
    if (!box) return;
    box.querySelector("img").src = link.getAttribute("href");
    box.classList.add("open");
  });
});
const lightbox = document.querySelector(".lightbox");
if (lightbox) {
  lightbox.addEventListener("click", () => lightbox.classList.remove("open"));
}

const form = document.querySelector("#rez-form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const text = [
      "Gün Batımı Restaurant rezervasyon talebi",
      "Ad: " + (data.get("ad") || ""),
      "Telefon: " + (data.get("tel") || ""),
      "Tarih: " + (data.get("tarih") || ""),
      "Saat: " + (data.get("saat") || ""),
      "Kişi: " + (data.get("kisi") || ""),
      "Tercih: " + (data.get("tercih") || ""),
      "Not: " + (data.get("not") || "")
    ].join("\n");
    const url = "https://wa.me/905327182605?text=" + encodeURIComponent(text);
    window.open(url, "_blank", "noopener");
  });
}

const qrHost = document.getElementById("qrcode");
if (qrHost && window.QRCode) {
  const target = new URL("menu.html", window.location.href).href;
  qrHost.innerHTML = "";
  new QRCode(qrHost, {
    text: target,
    width: 180,
    height: 180,
    colorDark: "#2a1810",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.M
  });
  const label = document.getElementById("qr-url");
  if (label) label.textContent = target;
}
