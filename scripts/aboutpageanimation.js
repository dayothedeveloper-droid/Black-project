const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    })
})

const animatedElements = document.querySelectorAll(".reveal-element");
animatedElements.forEach((el) => {
    observer.observe(el)
})