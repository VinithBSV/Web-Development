function factorial() {
    const num = document.querySelector(".entry").value;
    const display = document.querySelector(".alert");
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    display.innerHTML = `Factorial of ${num} = ${fact}`;
}