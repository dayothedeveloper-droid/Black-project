const popup = document.querySelector(".popup-contents");
console.log(popup)
const emailInput = document.getElementById("email");
const subscribeBtn = document.querySelector(".subscribe-button");
const overlay = document.querySelector(".overlay-popup");
const successOverlay = document.getElementById("successModal");
const closeSuccessBtn = document.querySelector(".close-btn");
const errorOverlay = document.querySelector("#errorModal");
const closeErrorOverlay = document.getElementById("closeErrorModalBtn");
const errorEmailDisplay = document.querySelector(".email-error-display");
console.log(errorEmailDisplay)
const mobileNewsletter = document.querySelector(".newsletter-form")
console.log(mobileNewsletter)
const mobileInputValue = document.getElementById("newsletter-email");

const newsLetter = async (email) => {

    if (email.trim() === "") {
        console.log("PLEASE input your email");
        errorEmailDisplay.style.color = "red"
        errorEmailDisplay.textContent = "Please input your email";
        return
    }
    subscribeBtn.disabled = true;
    try{
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url, {
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email.value
            })
        })

        if (!response.ok) {
            throw new Error("Subscription failed")
        }

        overlay.classList.add("hidden");
        successOverlay.classList.remove("hidden")


    } catch (error) {
        overlay.classList.add("hidden")
        errorOverlay.classList.remove("hidden")
        errorMsg.textContent = error.message
    }
} 

popup.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = emailInput.value.trim()
    newsLetter(emailValue) 
})
mobileNewsletter.addEventListener("submit", (event) => {
    event.preventDefault();
    const mobileEmailValue = mobileInputValue.value.trim()
    newsLetter(mobileEmailValue) 
})


closeSuccessBtn.addEventListener("click", () => {
    successOverlay.classList.add("hidden")
});

closeErrorOverlay.addEventListener("click", () => {
  errorOverlay.classList.add("hidden")
});