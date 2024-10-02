'use strict';
const btn = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnclose = document.querySelector(".close-modal");
const openmodal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
const closemodal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', openmodal);
}
btnclose.addEventListener('click', closemodal);
overlay.addEventListener('click', closemodal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closemodal();
        }
    }
});