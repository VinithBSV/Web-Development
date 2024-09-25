function squareRoot() {
    const val = document.querySelector(".entry").value;
    const dis = document.querySelector(".display");
    if (val <= 0) {
        dis.innerHTML = "Enter the number above 0.";
    }
    else {
        dis.innerHTML = "The square root is " + Math.sqrt(val);
    }
}