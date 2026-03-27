const inp = document.querySelector("#qrInput");
const genBtn = document.querySelector("#generateBtn");
const qrPopup = document.querySelector("#qrPopup");
const qrImg = document.querySelector("#qrImg");
const downloadBtn = document.querySelector("#downloadBtn");
const closeBtn = document.querySelector("#closeBtn");

const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

genBtn.addEventListener("click", () => {
  if (!inp.value) {
    alert("Enter Text or URL first!");
  } //URL is only work in google not in live preview
  else {
    const imgURL = url + inp.value;
    qrImg.setAttribute("src", imgURL);

    setTimeout(() => {
      qrPopup.classList.add("show");
    }, 1000);
  }
});

downloadBtn.addEventListener("click", () => {
  const imgURL = url + inp.value;
  fetch(imgURL)
    .then((res) => res.blob())
    .then((blob) => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "qr.jpg";
      link.click();
    });
});

closeBtn.addEventListener("click", () => {
  qrPopup.classList.remove("show");
});
