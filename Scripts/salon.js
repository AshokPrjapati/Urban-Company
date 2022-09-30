// cart section
let header = document.querySelector("header");

let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 0
}

let observer = new IntersectionObserver((entries) => {
    let cards = document.querySelector(".card");
    let ent = entries[0];
    ent.isIntersecting === false ? cards.classList.add("sticky") : cards.classList.remove("sticky");
    console.log(ent)

}, options);
observer.observe(header);

// sliding Images

let pic = 1;

slide();

function slide() {
    let slides = document.querySelectorAll(".slider>div");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }
    pic++;
    if (pic > slides.length) { pic = 1 }
    slides[pic - 1].style.display = "block";
    setTimeout(slide, 2000);
}

