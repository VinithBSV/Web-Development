const img = document.getElementById("thumb");
const input = document.getElementById("file");
input.addEventListener("change", (e) => {
    img.src = URL.createObjectURL(e.target.files[0]);
})