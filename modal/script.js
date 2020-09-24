const btnModalEl = document.getElementById("btn-modal");
const modalContainerEl = document.getElementById("modal-container");
const modalCloseBtnEl = document.getElementById("modal-close-btn");

btnModalEl.addEventListener('click', () => {
    modalContainerEl.classList.add('active');
});

modalCloseBtnEl.addEventListener('click', () => {
    modalContainerEl.classList.remove('active');
});