const emailInput = document.getElementById("email");
const subscribeBtn = document.querySelector(".subscribe-button");
const overlay = document.querySelector(".overlay-popup");
const successOverlay = document.getElementById("successModal");
const closeSuccessBtn = document.querySelector(".close-btn");
const errorOverlay = document.querySelector("#errorModal");
const closeErrorOverlay = document.getElementById("closeErrorModalBtn");

const newsLetter = async () => {

    if (emailInput.value.trim() === "") {
        console.log("PLEASE input your email");
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
                email: emailInput.value
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

subscribeBtn.addEventListener("click", () => {
    newsLetter();
});


closeSuccessBtn.addEventListener("click", () => {
    successOverlay.classList.add("hidden")
});

closeErrorOverlay.addEventListener("click", () => {
  errorOverlay.classList.add("hidden")
});

emailInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        newsLetter()
    }
});