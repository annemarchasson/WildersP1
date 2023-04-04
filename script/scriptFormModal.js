const btnSubC = document.getElementById('btn-submit-contact');
const modalC = document.getElementById('modalContain');
const btnCloC = document.getElementById('btn-close-contact');

btnSubC.onclick = function() {
    event.preventDefault();
    modalC.style.display = "flex";
}

 btnCloC.onclick = function () {
    event.preventDefault();
    modalC.style.display = "none";
}




