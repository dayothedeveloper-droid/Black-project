const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: .1
});

const initWatchAnimation = () => {
    const elements = document.querySelectorAll(".fade-in");

    elements.forEach((element) => {
        observer.observe(element);
    });
};

export default initWatchAnimation;
