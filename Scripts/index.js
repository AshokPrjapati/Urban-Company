// navbar

let navbar = document.querySelector("#navbar");
let header = document.querySelector("header");
let navbarContent = `<div id="search">
<i class="fa-solid fa-magnifying-glass"></i>
<input type="text" placeholder="Search for Services" />
</div>
<div id="list">
<div>
  <img
    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png"
    alt="Salon for Women"
  />
  <p>Women Salon</p>
</div>
<div>
  <img
    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png"
    alt="Hair Services for Women"
  />
  <p>Hair Services..</p>
</div>
<div>
  <img
    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png"
    alt="Women's Therapies"
  />
  <p>Women's The...</p>
</div>
<div>
  <img
    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png"
    alt="Salon for Mens"
  />
  <p>Mens Salon</p>
</div>
<div>
  <img
    src="https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png"
    alt="Men's Therapies"
  />
  <p>Men's th...</p>
</div>
<div>
  <h1><a href="#location">+5</a></h1>
</div>
</div>`
displayNavbar(navbarContent);
function displayNavbar(html) {
    navbar.innerHTML = html;
}
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


// side page
let loginContent = `<div class="head">
<div class="cross">
  <ul>
    <li id="bar1"></li>
    <li id="bar2"></li>
  </ul>
</div>

<p>Please Login To Continue</p>
</div>
<div class="number">
<div>
  <select name="" id="code">
    <option value="+91">+91</option>
    <option value="+61">+61</option>
    <option value="+65">+65</option>
    <option value="+1">+1</option>
    <option value="+966">+966</option>
    <option value="+971">+971</option>
  </select>
</div>

<input type="Number" placeholder="Enter Phone Number" />
</div>
<button>Continue</button>`;
document.querySelector(".login").addEventListener("click", () => displaySidePage(loginContent));
function displaySidePage(html) {
    document.querySelector(".side-page").innerHTML = null;
    document.querySelector(".side-page").innerHTML = html;
    header.classList.add("active");
    document.querySelector(".cross").addEventListener("click", () => header.classList.remove("active"));
}


// Header Section
let NavCard = [
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
        title: "Salon for Women"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1629973621437-ce5af9.png",
        title: "Hair Services for Women",
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
        title: "Women's Therapies"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
        title: "Salon for Mens"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
        title: "Men's Therapies"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
        title: "AC/Appliances"
    },
    {

    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
        title: "Home Painting"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
        title: "Cleaning & pest Control"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_07f29980.jpeg",
        title: "Electricians"
    },
    {
        url: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
        title: "Plumbers And Carpenters"
    },
    {

    }

];
let cards = document.querySelector(".cards");

display(NavCard);

function display(arr) {
    arr.forEach((el) => {
        if (el.url == undefined || el.title == undefined) {
            let container = document.createElement("div");
            cards.append(container);
        }
        else {
            let container = document.createElement("div");

            let img = document.createElement("img");
            img.src = el.url;

            let p = document.createElement("p");
            p.innerText = el.title;

            container.append(img, p);
            cards.append(container);
            container.addEventListener("click", () => window.location.href = "./salon.html");
        }
    })
}


