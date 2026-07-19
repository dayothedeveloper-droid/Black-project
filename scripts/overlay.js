const overlay = document.querySelector(".overlay-popup");
const closeBtn = document.querySelector(".close-popup-btn");
const STORAGE_KEY = "popupDismissed";
const DEV_MODE =  false;

if (DEV_MODE) {
    localStorage.removeItem(STORAGE_KEY);
};
const hasDismissedPopup = () => {
  return localStorage.getItem(STORAGE_KEY);
};

const saveDismissedPopup = () => {
  localStorage.setItem(STORAGE_KEY, "true");
};

export function showPopup () {
    if (!hasDismissedPopup()) {
      setTimeout(() => {
        overlay.classList.add("show");
    }, 2000);
    }
   
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    saveDismissedPopup();
  });
};