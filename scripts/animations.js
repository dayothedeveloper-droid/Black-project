//  use the intersection observer API to initialize scroll animations 
// the intersection obserer API
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        };
    });
}, {
    threshold: .4
});

export const initScrollAnimation = () => {
  const elements =  document.querySelectorAll(".fade-right, .fade-up");

  elements.forEach((el) => {
    observer.observe(el);
  });
};
