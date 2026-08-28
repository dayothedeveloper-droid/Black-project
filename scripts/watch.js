const watchObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        };
    });
},{
    threshold: .1
});

export default function initWatchAnimation() {
    const watchElement = document.querySelectorAll(".fade-in");
        watchElement.forEach((el) => {
            watchObserver.observe(el)
        });
};

