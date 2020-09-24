const toggleEl = document.getElementById("toggle");

toggleEl.addEventListener('change', (e)  => {
    document.body.classList.toggle('dark-mode', e.target.checked);
});