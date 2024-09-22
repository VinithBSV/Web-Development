function square() {
    const num = document.querySelector(".entry").value;
    const display = document.querySelector(".dis");
    let sqr = num * num;
    display.innerHTML = ` Square of ${num} is ${sqr}.`;
}
function cube() {
    const num = document.querySelector(".entry").value;
    const display = document.querySelector(".dis");
    let cub = num * num * num;
    display.innerHTML = ` Cube of ${num} is ${cub}.`;
}

