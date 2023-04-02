const dropdownBtn=document.querySelector(".dropdown-btn");
const dropdownMenuContent=document.querySelector(".dropdown-menu-content");

dropdownBtn.addEventListener ("click", function () {
    console.log("click");
    console.log("selector",dropdownBtn);
    dropdownMenuContent.classList.toggle("visible");
});