const imgContainerEl = document.getElementById("img-container");
const imgEl = document.querySelectorAll("img");

let i = 0;

function carousel() {
    i++;

    if (i > imgEl.length - 1) {
        i = 0;
    }

    imgContainerEl.style.transform = `translateX(${-i * 500}px)`;

    setTimeout(carousel, 3000);
}

carousel();