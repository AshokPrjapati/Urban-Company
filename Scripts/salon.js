// cart section
let header = document.querySelector("header");
let cards = document.querySelector(".card");


let cardArr = [
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1663925040892-c7fc42.jpeg",
        title: "Bestseller Packages",
        ref: "#p"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png",
        title: "Make Your Own Package",
        ref: "#p1"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655977998579-8de14b.png",
        title: "Waxing",
        ref: "#p2"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png",
        title: "Facial & CleanUp",
        ref: "#p3"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png",
        title: "Manicure",
        ref: "#p4"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464682-7ab5c1.png",
        title: "Padicure",
        ref: "#p5"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464206-1f4ad4.png",
        title: "Threading and Face Wax",
        ref: "#p6"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480991-344026.png",
        title: "Bleach & Detan",
        ref: "#p7"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287475795-1630ef.png",
        title: "Hair color & care",
        ref: "#p8"
    },

];
display(cardArr);

function display(arr) {
    arr.forEach((el) => {
        let container = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.url;

        let p = document.createElement("p");
        p.innerText = el.title;

        container.append(img, p);
        cards.append(container);

        container.addEventListener("click", () => redirect(el))
    })
}

function redirect(el) {
    document.location.href = el.ref;
}

let d = document.querySelector(".detail");
let a = document.querySelector(".about");
let f = document.querySelector(".footer");

let observer = new IntersectionObserver((entries) => {
    let ent = entries[0];
    ent.isIntersecting === false ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
});

let observer1 = new IntersectionObserver((entries) => {
    let ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === true) {
        document.body.classList.add("stop");
    } else document.body.classList.remove("stop");
});

observer.observe(header);
observer1.observe(d);

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


// Product section
let p1 = document.querySelector("#p");
let Product0 = [
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    },
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    },
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    },
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    },
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    },
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    },
    {
        t1: "Face Detox",
        t2: "4.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    },
    {
        t1: "Full Body Indulgence",
        t2: "4.77 (113.5K)",
        t3: "3,929",
        t4: "4hr 15 mins",
        t5: "Eyebrow threading",
        t6: "Chocolate Roll-on",
        t7: "Elysian Chocolate & Vanilla manicure",
    },
    {
        t1: "Wax and Glow [RICA regular waxing] ",
        t2: "4.78 (136K)",
        t3: "2379",
        t4: "2hr 10 mins",
        t5: "Full arms + Underarms (RICA)",
        t6: "Full legs RICA",
        t7: "Cheryl's by L'Oreal glovite facial",
    }
];
displayProduct(Product0, p1);

let p2 = document.querySelector("#p1");
let product1 = [
    {
        t1: "Make Your Own Package - roll on special",
        t2: "4.78 (193.9K)",
        t3: "1,193",
        t4: "1hr 30 mins",
        t5: "cut,file&polish-feet",
        t6: "Full leg Honey",
        t7: " Head Massage",
    },
    {
        t1: "Make Your Own Package - roll on special",
        t2: "4.78 (193.9K)",
        t3: "1,193",
        t4: "1hr 30 mins",
        t5: "cut,file&polish-feet",
        t6: "Full leg Honey",
        t7: " Head Massage",
    },
    {
        t1: "Make Your Own Package - roll on special",
        t2: "4.78 (193.9K)",
        t3: "1,193",
        t4: "1hr 30 mins",
        t5: "cut,file&polish-feet",
        t6: "Full leg Honey",
        t7: " Head Massage",
    },
    {
        t1: "Make Your Own Package - roll on special",
        t2: "4.78 (193.9K)",
        t3: "1,193",
        t4: "1hr 30 mins",
        t5: "cut,file&polish-feet",
        t6: "Full leg Honey",
        t7: " Head Massage",
    },
    {
        t1: "Make Your Own Package - roll on special",
        t2: "4.78 (193.9K)",
        t3: "1,193",
        t4: "1hr 30 mins",
        t5: "cut,file&polish-feet",
        t6: "Full leg Honey",
        t7: " Head Massage",
    }, {
        t1: "Make Your Own Package - roll on special",
        t2: "4.78 (193.9K)",
        t3: "1,193",
        t4: "1hr 30 mins",
        t5: "cut,file&polish-feet",
        t6: "Full leg Honey",
        t7: " Head Massage",
    },
];
displayProduct(Product0, p2);

let p3 = document.querySelector("#p2");
let product3 = [
    {
        t1: "roll-on special (full arms + full legs + underarms",
        t2: "4.81 (13.2K)",
        t3: "849",
        t4: "Not Available",
        t5: "choose from chocolate roll -on& RICA Roll0on",
        t6: "We are RICA peel-off for underarms waxing",
        t7: " cover full arms, full legs, underarms, stomach &back",
    },
    {
        t1: "Full leg waxing",
        t2: "4.81 (13.2K)",
        t3: "849",
        t4: "Not Available",
        t5: "choose from chocolate roll -on& RICA Roll0on",
        t6: "We are RICA peel-off for underarms waxing",
        t7: " cover full arms, full legs, underarms, stomach &back",
    },
    {
        t1: "Full arms + underarms",
        t2: "4.81 (13.2K)",
        t3: "849",
        t4: "Not Available",
        t5: "choose from chocolate roll -on& RICA Roll0on",
        t6: "We are RICA peel-off for underarms waxing",
        t7: " cover full arms, full legs, underarms, stomach &back",
    },
    {
        t1: "full body",
        t2: "4.81 (13.2K)",
        t3: "849",
        t4: "Not Available",
        t5: "choose from chocolate roll -on& RICA Roll0on",
        t6: "We are RICA peel-off for underarms waxing",
        t7: " cover full arms, full legs, underarms, stomach &back",
    },
    {
        t1: "Stomach",
        t2: "4.81 (13.2K)",
        t3: "849",
        t4: "Not Available",
        t5: "choose from chocolate roll -on& RICA Roll0on",
        t6: "We are RICA peel-off for underarms waxing",
        t7: " cover full arms, full legs, underarms, stomach &back",
    },
];
displayProduct(Product0, p3);


function displayProduct(arr, product) {

    arr.forEach((el) => {
        let item = document.createElement("div");
        item.setAttribute("class", "item");
        let content = `
        <div class="first">
          <div>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="#07794C"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.3 3H4.8A1.8 1.8 0 003 4.8v14.4A1.8 1.8 0 004.8 21h14.4a1.8 1.8 0 001.8-1.8V4.8A1.8 1.8 0 0019.2 3h-4.5v9L12 10.65 9.3 12V3z"
                fill="#07794C"
              ></path>
            </svg>
            <p>Package</p>
          </div>
        
          <p>${el.t1}</p>
          <p><i class="fa-solid fa-star"></i>${el.t2}</p>
          <div>
            <p>${el.t3}</p>
            <li>${el.t4}</li>
          </div>
          <div>
            <li>${el.t5}</li>
            <li>${el.t6}</li>
            <li>${el.t7}</li>
          </div>
          <div>
            <button>Edit Your Packages</button>
          </div>
        </div>
        <div class="second">
          <div>
            <button>Add</button>
          </div>
        </div>
        `;
        item.innerHTML = content;
        product.append(item)
    })

}


// cart section
let starSvg = `<svg
width="100%"
height="100%"
viewBox="0 0 16 16"
fill=""
xmlns="http://www.w3.org/2000/svg"
>
<circle cx="8" cy="8" r="7" fill="#6E43E5"></circle>
<path
  d="M12 8c0 .402-.238.767-.606.929l-.225.099a4.175 4.175 0 00-2.141 2.14l-.099.226a1.015 1.015 0 01-1.858 0l-.099-.225a4.175 4.175 0 00-2.14-2.141l-.226-.099a1.015 1.015 0 010-1.858l.225-.099a4.174 4.174 0 002.141-2.14l.099-.226a1.015 1.015 0 011.858 0l.099.225a4.175 4.175 0 002.14 2.141l.226.099c.368.162.606.527.606.929z"
  fill="#fff"
></path>
</svg>`;

let disSvg = `<svg
width="100%"
height="100%"
viewBox="0 0 16 16"
fill=""
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M15 7.929L8.472 1.4a.997.997 0 00-.904-.274l-5.04 1.008a.5.5 0 00-.393.393l-1.008 5.04a.998.998 0 00.274.904L7.928 15a.999.999 0 001.414 0L15 9.343a.999.999 0 000-1.414zM5.25 6a.75.75 0 110-1.5.75.75 0 010 1.5z"
  fill="#24A346"
></path>
</svg>`;

let cartArr = [
    {
        svg: starSvg,
        p1: "Save 15% on every order",
        p2: "Get Plus Now"
    },
    {
        svg: disSvg,
        p1: "20% Cashback on Paytm",
        p2: "Upto ₹400 off"
    },
    {
        svg: disSvg,
        p1: "Assured Casback On Paytm",
        p2: "Upto ₹500 off"
    },
    {
        svg: disSvg,
        p1: "Get Upto ₹500 Cashback",
        p2: "Valid on Mobikwik Wallet"
    }
];

displayOffer(cartArr);

function displayOffer(arr) {
    let cart = document.querySelector(".cart");
    arr.forEach((el) => {
        let div1 = document.createElement("div");
        div1.innerHTML = el.svg;
        let div2 = document.createElement("div");
        let p1 = document.createElement("p");
        let p2 = document.createElement("p");
        p1.innerText = el.p1;
        p2.innerText = el.p2;
        div2.append(p1, p2);
        div1.append(div2);
        cart.append(div1);
    })
};



// Detail Section

let arrowSvg = `<svg
xmlns="http://www.w3.org/2000/svg"
width="100%"
height="100%"
fill=""
viewBox="0 0 16 16"
>
<path
  fill="#0F0F0F"
  fill-rule="evenodd"
  d="M9.94 8L5.47 3.53l1.06-1.06 5 5a.75.75 0 010 1.06l-5 5-1.06-1.06L9.94 8z"
  clip-rule="evenodd"
></path>
</svg>`;

let qaArr = [
    {
        que: "How long does the hair have to be for waxing?",
        svg: arrowSvg,
        ans: "The longer the hair, the better the wax will grab the hair and will pull it out. Ideally one can wait for 3-5 weeks before getting waxing done depending on the hair growth. In case of emergency in the face of an event you need to go to, we suggest you wait for at least 7 days before another round of body waxing. A word of advice- never clip your hair before your waxing day."
    },
    {
        que: "What should I do to prepare for waxing?",
        svg: arrowSvg,
        ans: "Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session",
    },
    {
        que: "Does waxing hurt a lot?",
        svg: arrowSvg,
        ans: "The process involves ripping out the hair from the follicle and it is a painful process. However, the pain threshold for waxing varies from person to person. Those who have thick hair, sensitive skin and/or getting waxed for the first time particularly undergo more pain. That is why it is highly recommended to go to not just pros but skilled salon beauty professionals. Our professionals undergo a rigorous training process before being a part of Urban Company, despite having years of experience in the field. This ensures that you get the desired result with minimal inconvenience.",
    },
    {
        que: "What are the types of waxing services available with you?",
        svg: arrowSvg,
        ans: "We offer:  Rica wax for sensitive skin Rica peel off wax Regular wax",
    },
    {
        que: "How long does the hair have to be for waxing?",
        svg: arrowSvg,
        ans: "The longer the hair, the better the wax will grab the hair and will pull it out. Ideally one can wait for 3-5 weeks before getting waxing done depending on the hair growth. In case of emergency in the face of an event you need to go to, we suggest you wait for at least 7 days before another round of body waxing. A word of advice- never clip your hair before your waxing day."
    },
    {
        que: "What should I do to prepare for waxing?",
        svg: arrowSvg,
        ans: "Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session",
    },
    {
        que: "Does waxing hurt a lot?",
        svg: arrowSvg,
        ans: "The process involves ripping out the hair from the follicle and it is a painful process. However, the pain threshold for waxing varies from person to person. Those who have thick hair, sensitive skin and/or getting waxed for the first time particularly undergo more pain. That is why it is highly recommended to go to not just pros but skilled salon beauty professionals. Our professionals undergo a rigorous training process before being a part of Urban Company, despite having years of experience in the field. This ensures that you get the desired result with minimal inconvenience.",
    },
    {
        que: "What are the types of waxing services available with you?",
        svg: arrowSvg,
        ans: "We offer:  Rica wax for sensitive skin Rica peel off wax Regular wax",
    },
    {
        que: "How long does the hair have to be for waxing?",
        svg: arrowSvg,
        ans: "The longer the hair, the better the wax will grab the hair and will pull it out. Ideally one can wait for 3-5 weeks before getting waxing done depending on the hair growth. In case of emergency in the face of an event you need to go to, we suggest you wait for at least 7 days before another round of body waxing. A word of advice- never clip your hair before your waxing day."
    },
    {
        que: "What should I do to prepare for waxing?",
        svg: arrowSvg,
        ans: "Although our salon at home professionals will do everything possible to make this process as pain free and satisfying as possible, there are certain things that you can do to ensure a great waxing session",
    },
    {
        que: "Does waxing hurt a lot?",
        svg: arrowSvg,
        ans: "The process involves ripping out the hair from the follicle and it is a painful process. However, the pain threshold for waxing varies from person to person. Those who have thick hair, sensitive skin and/or getting waxed for the first time particularly undergo more pain. That is why it is highly recommended to go to not just pros but skilled salon beauty professionals. Our professionals undergo a rigorous training process before being a part of Urban Company, despite having years of experience in the field. This ensures that you get the desired result with minimal inconvenience.",
    },
    {
        que: "What are the types of waxing services available with you?",
        svg: arrowSvg,
        ans: "We offer:  Rica wax for sensitive skin Rica peel off wax Regular wax",
    },
];

let faqs = document.querySelectorAll(".faq");
faqs.forEach(el => {
    el.addEventListener("click", () => el.classList.toggle("active"))
})

displayFAQ(qaArr);

function displayFAQ(arr) {
    let div = document.querySelector(".detail>div");
    arr.forEach(el => {
        let div1 = document.createElement("div");
        div1.setAttribute("class", "faq");
        div1.innerHTML = `
        <div class="que">
          <p>${el.que}</p>
          ${el.svg}
        </div>
        <div class="ans">
          <p>
          ${el.ans}
          </p>
        </div>
     `
        div.append(div1);

        div1.addEventListener("click", () => div1.classList.toggle("active"));
    })
}








