let navbar = document.querySelector("#navbar");
let header = document.querySelector("header");

let options = {
    root: null,
    rootMargin: '',
    threshold: 0,
}

let observer = new IntersectionObserver(() => {
    navbar.classList.toggle("show")
}, options);


observer.observe(header);