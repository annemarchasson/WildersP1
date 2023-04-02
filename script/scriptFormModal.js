const btnSub = document.getElementById('btnSubmit');
const modal = document.querySelector('.modalContain');
const btnClo = document.getElementsByClassName('close');

btnSub.addEventListener("click", (event) => {
    event.preventDefault();
    modal.style.display = "flex"
})

 btnClo.onclick = function () {
    modal.style.display = "none";
}