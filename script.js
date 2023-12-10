

const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generateBtn = wrapper.querySelector(".form button"),
    qrImg = wrapper.querySelector(".qr-code img"),
    title = wrapper.querySelector("header");

const randColor = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;

title.style.color = randColor;
qrInput.style.borderColor = randColor;
generateBtn.style.backgroundColor = randColor;

wrapper.addEventListener("click", (event) => {
    let randm = `hsl(${Math.floor(Math.random() * 361)}, 100%, 50%)`;
    title.style.color = randm;
    qrInput.style.borderColor = randm;
    generateBtn.style.backgroundColor = randm;
});

generateBtn.addEventListener("click", (event) => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code ...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load", (event) => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", (event) => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});

