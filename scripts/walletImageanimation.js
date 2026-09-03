const walletImg = document.getElementById("bouncingImage");
console.log(walletImg);
function bounceAnimation() {
    walletImg.addEventListener("mouseenter", () => {
      walletImg.classList.add("bounce-active")
    })

    walletImg.addEventListener("mouseleave", () => {
      walletImg.classList.remove("bounce-active")
    })
};

export default bounceAnimation;
