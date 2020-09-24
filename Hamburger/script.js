const btnMenuEL = document.getElementById("btn-menu");
const navigationMenuEl = document.getElementById("navigation-menu");


btnMenuEL.addEventListener("click", () => {
    navigationMenuEl.classList.toggle('active');
    btnMenuEL.classList.toggle('active');
});