// navbar

let navbar = document.querySelector("#navbar");
let header = document.querySelector("header");
let headerClass = document.querySelector(".header");

let options = {
    root: null,
    rootMargin: '-50px',
    threshold: 0,
}

let observer = new IntersectionObserver((entries) => {
    let ent = entries[0];
    ent.isIntersecting === true ? navbar.classList.add("show") : navbar.classList.remove("show");

}, options);


observer.observe(headerClass);

// location bar

document.querySelector("#location>div").addEventListener("click", () => header.classList.toggle("tipShow"));

// header.addEventListener("click", () => header.classList.remove("tipShow"))

// login Page
document.querySelector(".login").addEventListener("click", () => header.classList.add("active"));

document.querySelector(".cross").addEventListener("click", () => header.classList.remove("active"));


