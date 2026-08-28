const overlay = document.querySelector(".overlay-popup");
const closeBtn = document.querySelector(".close-popup-btn");

export function showPopup () {
      setTimeout(() => {
        overlay.classList.add("show");
    }, 3500);
};
   
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    saveDismissedPopup();
  });

