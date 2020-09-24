const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

btnEl.addEventListener('click', () => {
    const notification = document.createElement("div");

    // Add new element to HTML structure
    notification.classList.add("toast-notif");
    containerEl.appendChild(notification);
    notification.innerHTML = "This is notification message";

    
    setTimeout(() => {
        notification.remove();
    }, 1500);
    
});