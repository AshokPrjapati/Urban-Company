// cart section
let header = document.querySelector("header");
let cards = document.querySelector(".card");


let cardArr = [
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1663925040892-c7fc42.jpeg",
        title: "Bestseller Packages"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1635313403372-16db5c.png",
        title: "Make Your Own Package"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/growth/luminosity/1655977998579-8de14b.png",
        title: "Waxing"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png",
        title: "Facial & CleanUp"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287465245-e4dca0.png",
        title: "Manicure"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464682-7ab5c1.png",
        title: "Padicure"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287464206-1f4ad4.png",
        title: "Threading and Face Wax"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287480991-344026.png",
        title: "Bleach & Detan"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,q_auto:low,f_auto/w_64,dpr_1,fl_progressive:steep,q_auto,c_limit/images/supply/customer-app-supply/1655287475795-1630ef.png",
        title: "Hair color & care"
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
    })
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
}

let observer = new IntersectionObserver((entries) => {
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


// Product section

let ProductArr = [
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
        t1: "Face Detox",
        t2: "5.78 (190K)",
        t3: "1,079",
        t4: "1hr 15 mins",
        t5: "Face & neck bleach",
        t6: "Eyebrow threading",
        t7: " Elysian Pinacolada Fruit cleanup",
    }
];

// let html = `<div class="item">
// <div class="first">
//   <div>
//     <svg
//       width="100%"
//       height="100%"
//       viewBox="0 0 24 24"
//       fill="#07794C"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <path
//         fill-rule="evenodd"
//         clip-rule="evenodd"
//         d="M9.3 3H4.8A1.8 1.8 0 003 4.8v14.4A1.8 1.8 0 004.8 21h14.4a1.8 1.8 0 001.8-1.8V4.8A1.8 1.8 0 0019.2 3h-4.5v9L12 10.65 9.3 12V3z"
//         fill="#07794C"
//       ></path>
//     </svg>
//     <p>Package</p>
//   </div>

//   <p>${el.t1}</p>
//   <p><i class="fa-solid fa-star"></i>${el.t2}</p>
//   <div>
//     <p>${el.t3}</p>
//     <li>${el.t4}</li>
//   </div>
//   <div>
//     <li>${el.t5}</li>
//     <li>${el.t6}</li>
//     <li>${el.t7}</li>
//   </div>
//   <div>
//     <button>Edit Your Packages</button>
//   </div>
// </div>
// <div class="second">
//   <div>
//     <button>Add</button>
//   </div>
// </div>
// </div>`

displayProduct(ProductArr);
function displayProduct(arr) {
    let product = document.querySelector(".product");
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

