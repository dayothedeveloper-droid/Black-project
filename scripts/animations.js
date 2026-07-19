const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: .4
});

export function initScrollAnimation() {
    const elements = document.querySelectorAll(".fade-up, .fade-right");

    elements.forEach((el) => {
        observer.observe(el);
    });
};
