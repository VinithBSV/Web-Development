function table() {
    const val = document.querySelector(".entry").value;
    const display = document.querySelector(".tab");
    display.innerHTML = "";
    for (let i = 1; i <= 12; i++) {
        display.innerHTML += `${i} * ${val} = ${i * val} <br>`;
    }
}