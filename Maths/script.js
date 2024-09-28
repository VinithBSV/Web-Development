function findResult() {
    const val = document.querySelector(".entry").value;
    const tab = document.querySelector(".table");
    const eve = document.querySelector(".even");
    const factor = document.querySelector(".fact");
    const square = document.querySelector(".sq");
    /* Multiplication table*/
    for (let i = 1; i <= 12; i++) {
        tab.innerHTML += `${i} * ${val} = ${i * val} <br>`;
    }
    /* Even or Odd */
    if (val <= 0 || val === "") {
        eve.innerHTML = `Enter a number more than 0.`;
    } else if (val % 2 === 0) {
        eve.innerHTML = `${val} is an EVEN number.`;
    }
    else {
        eve.innerHTML = `${val} is an ODD number.`;
    }
    /*Factorial*/
    let fact = 1;
    if (val <= 0) {
        factor.innerHTML = `Enter the number above 0.`;
    } else {
        for (let i = 1; i <= val; i++) {
            fact = fact * i;
        }
        factor.innerHTML = `Factorial of ${val} = ${fact}`;
    }
    /*Square*/
    let sqr = val * val;
    square.innerHTML = ` Square of ${val} is ${sqr}.<br>`;
    /*Cube*/
    let cub = val * val * val;
    square.innerHTML += ` Cube of ${val} is ${cub}.<br>`;
    /*Square root*/
    if (val <= 0) {
        square.innerHTML += "Enter the number above 0.";
    }
    else {
        square.innerHTML += "The square root is " + Math.sqrt(val);
    }
}
function reset() {
    const tab = document.querySelector(".table");
    const eve = document.querySelector(".even");
    const factor = document.querySelector(".fact");
    const square = document.querySelector(".sq");
    tab.innerHTML = "";
    eve.innerHTML = "";
    factor.innerHTML = "";
    square.innerHTML = "";
}