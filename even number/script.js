function evenOrOdd() {
    const val = document.getElementById("entry").value;
    const result = document.getElementById("alert");
    if (val < 0 || val > 1000 || val === "") {
        result.textContent = `Enter a number btn 0-1000.`;
    } else if (val % 2 === 0) {
        result.textContent = `${val} is an EVEN number.`;
    }
    else {
        result.textContent = `${val} is an ODD number.`;
    }
}
function clearResult() {
    const val = document.getElementById("entry");
    const result = document.getElementById("alert");
    val.value = "";
    result.textContent = "";

}


