
const mega_MEnu_Mobile = document.querySelector(".menu-mega-mobile");
const link_Item = document.querySelector(".nav-menu-content-mobile");




const contentMenuMobile = [
    {
        title: "Commercial Marine",
        item: [
            "Commercial Marine Solutions",
            "System Solutions",
            "Marine Service Solutions ",
            "Marine Resources ",
        ]
    },
    {
        title: "Power Generation",
        item: [
            "Power Generation Solutions",
            "Power Generation Products",
            "Power Generation Applications ",
            "Power Generation Service Solutions",
            "Power Generation Resources",
        ]
    }
]

contentMenuMobile.forEach((item, index) => link_Item.appendChild(NavMenu1(index)));

function NavMenu1(index) {
    const { title, item } = contentMenuMobile[index];
    const navMenuItem = document.createElement('li');
    navMenuItem.className = "link-items-content-mobile";
    navMenuItem.innerHTML = `
    <div class="container-link-item-moblie">
        <a >${title}</a>
        <i class="fa-solid fa-angle-right"></i>
     </div>
    `;
    return navMenuItem;
}

const subMenu = document.querySelectorAll(".container-link-item-moblie");
const linkItemContent = document.querySelector(".link-items-content-mobile");
// const subMenuMobile = document.querySelectorAll(".sub-menu-mobile");

// ---------------------------------------------
const subMenuMobile = document.createElement('div');
subMenuMobile.className = 'sub-menu-mobile';
subMenuMobile.innerHTML = `
    <div class="sub-menu-top">
        <div class="to-back-menu">
            <div class="container-sub-menu">
                <i class="fa-solid fa-angle-left"></i>
                <p><span>Back</span> to Main menu</p>
            </div>
        </div>

        <div>Change</div>
    </div >
`;


function Navmenu2(index) {
    const { title, item } = contentMenuMobile[index];
    const subBodyNav = document.createElement("div");
    subBodyNav.className = "sub-menu-content-list";

    subBodyNav.innerHTML = `
            <div class="header-sub-content">
                <div class="container-sub-menu">
                    <h2>${title}</h2>
                </div>
            </div>

        <div class="body-sub-content">
            <ul class="sub-body-nav">
                ${item.map(content => `
                <li class="link-sub-body">
                    <div class="container-sub-menu">
                        <a> ${content}</a>
                        <i class="fa-solid fa-angle-right"></i>
                    </div>
                </li>`).join("")}   
            </ul >
        </div >
    `
}

contentMenuMobile.forEach((item, index) => {
    linkItemContent.addEventListener("click", function () {
        linkItemContent.appendChild(subMenuMobile);
        const subMenuTop = document.querySelector(".")
        subMenuMobile.replaceChild(Navmenu2(index), subMenuMobile.children[1]);
    })
})





const go_Back = document.querySelectorAll(".to-back-menu");


subMenu.forEach(item => {
    item.addEventListener("click", function () {
        subMenuMobile.forEach(sub => {
            sub.classList.add("active2");
            sub.style.animation = "slideLeft 0.5s ease forwards";
        })
    })
})

go_Back.forEach(item => {
    item.addEventListener("click", function () {

        subMenuMobile.forEach(sub => {
            sub.style.animation = "slideRight 0.5s ease forwards";
            setTimeout(() => {
                sub.classList.remove("active2");
            }, 300);
        })
    })
})

function myFunction(x) {
    x.classList.toggle("change");
    mega_MEnu_Mobile.classList.toggle("active");
    subMenuMobile.forEach(sub => {
        sub.style.animation = "slideRight 0.5s ease forwards";
        setTimeout(() => {
            sub.classList.remove("active2");
        }, 300);
    })
    // if(!mega_MEnu_Mobile.classList.contains("avtive")){
    //     return;
    // }
    // if(x.target.closest(".menu-mega-mobile"))
}

// link_Item.addEventListener("click", (e) => {

// })



// go_Back.addEventListener("click", function () {
//     subMegeMobile.style.animation = "slideRight 0.5s ease forwards";
//     subMegeMobile.className = 'sub-menu-mobile';
// })



// function ShowSubMenu(hasChildren) {


//     const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
// }








