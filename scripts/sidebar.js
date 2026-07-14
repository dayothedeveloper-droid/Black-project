const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-button");

function openSidebar() {
    sidebar.classList.add("active");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden"
}

function closedSidebar() {
     sidebar.classList.remove("active");
     overlay.classList.remove("active");
     document.body.style.overflow = "";
}

export function sidebarDisplay () {
    hamburgerMenu.addEventListener("click", () => {
        openSidebar();
    });
    closeButton.addEventListener("click", () => {
        closedSidebar();
    });
};