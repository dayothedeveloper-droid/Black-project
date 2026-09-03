//  I used the intersection observer API to initialize scroll animations 
// the intersection observer API
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
}, {
    threshold: .2
});

export const initScrollAnimation = () => {
  const elements =  document.querySelectorAll(".fade-right");
     elements.forEach((el) =>  observer.observe(el)
  );
};


