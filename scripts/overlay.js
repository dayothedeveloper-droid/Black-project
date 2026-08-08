const overlay = document.querySelector(".overlay-popup");
const closeBtn = document.querySelector(".close-popup-btn");
const storageKey = "popupDismissed";
const devMode =  false;

if (devMode) {
    localStorage.removeItem(storageKey);
};
const hasDismissedPopup = () => {
  return localStorage.getItem(storageKey);
};

const saveDismissedPopup = () => {
  localStorage.setItem(storageKey, "true");
};

export function showPopup () {
    if (!hasDismissedPopup()) {
      setTimeout(() => {
        overlay.classList.add("show");
    }, 5000);
};
   
  closeBtn.addEventListener("click", () => {
    overlay.classList.remove("show");
    saveDismissedPopup();
  });
};
