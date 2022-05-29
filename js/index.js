

const menu = document.querySelector(".menu-mega-mobile");
const menuMain = menu.querySelectorAll(".container-link-item-moblie");
const goBack = menu.querySelectorAll(".to-back-menu");
//  const menuTrigger = document.querySelector(".mobile-menu-trigger");
//  const closeMenu = menu.querySelector(".mobile-menu-close");
let subMenu;
menuMain.forEach(item => {
    item.addEventListener("click", (e) => {

        if (e.target.closest(".link-items-content-mobile")) {
            const hasChildren = e.target.closest(".link-items-content-mobile");
            showSubMenu(hasChildren);
            console.log();
        }
    });
})


goBack.forEach(item => {
    item.addEventListener("click", () => {
        hideSubMenu();
    })
})

function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelectorAll(".sub-menu-mobile");
    subMenu.forEach(item => {
        item.classList.add("active");
        item.style.animation = "slideLeft 0.5s ease forwards";
    });

    const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
}

function hideSubMenu() {
    subMenu.forEach(item => {
        item.style.animation = "slideRight 0.5s ease forwards";
        setTimeout(() => {
            item.classList.remove("active");
        }, 300);
    });
}

function myFunction(x) {
    x.classList.toggle("change");
    menu.classList.toggle("active");
    // if(!mega_MEnu_Mobile.classList.contains("avtive")){
    //     return;
    // }
    // if(x.target.closest(".menu-mega-mobile"))
}


let navbar = document.querySelector(".nav-fixed");
let scrollPrevious = window.pageYOffset;
window.onscroll = function () {
    let scrollCurrent = window.pageYOffset;
    if (scrollPrevious < scrollCurrent) {
        navbar.classList.add("slicky");
    }
    else {
        navbar.classList.remove("slicky");
    }

    scrollPrevious = scrollCurrent;
}


const closeNote = document.querySelector(".btn-close-note");

closeNote.addEventListener("click", () => {
    document.querySelector(".box-note").style.display = "none";
})

