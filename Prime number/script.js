function isPrime() {
    const val = document.getElementById("entry").value;
    const result = document.getElementById("alert");
    let flag = 1;
    if (val < 0 || val > 1000 || val === "") {

        flag = 0;
    }
    else if (val == 1 || val == 0) {
        flag = 2;
    }
    else if (val <= 3 || val == 5) {
        flag = 1;
    }
    else if (val % 2 === 0 || val % 3 === 0 || val % 5 === 0) {
        flag = 2;
    }
    else {
        flag = 1;
    }
    if (flag === 1) {
        result.textContent = `${val} is a PRIME number.`;
    }
    else if (flag === 0) {
        result.textContent = `Enter a number btn 0-1000.`;
    }
    else {
        result.textContent = `${val} is NOT a Prime number`;
    }
}

function clearResult() {
    const val = document.getElementById("entry");
    const result = document.getElementById("alert");
    val.value = "";
    result.textContent = "";

}