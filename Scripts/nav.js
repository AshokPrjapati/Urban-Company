let navbar = document.querySelector("#navbar");
let header = document.querySelector("header");

let options = {
    root: null,
    rootMargin: '-50px',
    threshold: 0,
}

let observer = new IntersectionObserver((entries) => {
    let ent = entries[0];
    ent.isIntersecting === true ? navbar.classList.add("show") : navbar.classList.remove("show");

}, options);


observer.observe(header);