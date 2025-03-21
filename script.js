const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target); // Unobserve the element after it has been animated
        }
    });
});

const hiddenElements = document.querySelectorAll('.abt, .para, .img');
hiddenElements.forEach((element) => observer.observe(element));
