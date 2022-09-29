

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

