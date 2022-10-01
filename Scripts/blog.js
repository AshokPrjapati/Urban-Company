
let dropdownArr = [
    {
        t1: "BEAUTY",
        t2: "HairCare",
        t3: "Makeup",
        t4: "Skincare"
    },
    {
        t1: "MEN",
        t2: "Grooming",
        t3: "HairCare",
        t4: "Makeup",
    },

    {
        t1: "INTERIORS",
        t2: "Decor&Style",
        t3: "Kitchens",
        t4: "Bath Rooms",
        t5: "Bed Rooms",
        t6: "Living Rooms",
        t7: "Dining Rooms",
        t8: "Other Areas",
        t9: "Real Home Tour"
    },

    {
        t1: "LIFESTYLE",
        t2: "Health&Wellness",
        t3: "Party",
        t4: "Wedding",
    },
    {
        t1: "HUMANS OF URBAN COMPANY",
    },
    {
        t1: "INSIDE URBAN COMPANY",
    },
    {
        t1: "TUG VIDEOS",
    },
    {
        t1: "URBANCOMPANY.COM",
    },
];

display(dropdownArr);
function display(arr) {
    let list = document.querySelector(".list");
    arr.forEach(el => {
        let div = document.createElement("div");

        if (!el.t2) {
            div.innerHTML = ` <p>${el.t1}</p>`
            list.append(div);
        } else if (!el.t4 || !el.t5 || !el.t6 || !el.t7 || !el.t8 || !el.t9) {
            div.innerHTML = ` <p> ${el.t1} <i class="fa-solid fa-angle-down"></i></p>
                <div class="hide">
                    <p>${el.t2}</p>
                    <p>${el.t3}</p>
                    <p>${el.t4}</p>
                </div>`
            list.append(div);
        } else {
            div.innerHTML = ` <p> ${el.t1} <i class="fa-solid fa-angle-down"></i></p>
                <div class="hide">
                    <p>${el.t2}</p>
                    <p>${el.t3}</p>
                    <p>${el.t4}</p>
                    <p>${el.t5}</p>
                    <p>${el.t6}</p>
                    <p>${el.t7}</p>
                    <p>${el.t8}</p>
                    <p>${el.t9}</p>
                </div>`
            list.append(div);
        }



    })
}



// intersection Observer

let header = document.querySelector(".container");
let row = document.querySelector(".row");
let footer = document.querySelector(".footer");

let observer = new IntersectionObserver(entries => {
    let ent = entries[0];
    console.log(ent);
    ent.isIntersecting === false ? row.classList.add("sticky") : row.classList.remove("sticky");
})

let observer2 = new IntersectionObserver(entries => {
    let ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting) row.classList.remove("sticky");
})

observer.observe(header);
observer2.observe(footer);