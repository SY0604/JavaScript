// 5. Lazy Loading of Images: Implement lazy loading of images on a web page for performance optimization.
const lazyLoadImages = () => {
    const images = document.querySelectorAll('.lazy');
    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    }, options);
    images.forEach(image => {
        imageObserver.observe(image);
    });
};
document.addEventListener('DOMContentLoaded', lazyLoadImages);
