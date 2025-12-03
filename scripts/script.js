// JavaScript Document
console.log("hi");

// oke dit is voor het kruisje, maar doet t nu niet meer
var vegaBurgerMenu = document.querySelector("header button");
vegaBurgerMenu.onclick = vegaBurgerMenuKlik;
function vegaBurgerMenuKlik() {
    if
    (vegaBurgerMenu.ariaExpanded == "false") {
    vegaBurgerMenu.ariaExpanded = "true"
    }
    else {
    vegaBurgerMenu.ariaExpanded = "false"
    }
}

var vegaBurgerMenu = document.querySelector("header button");
vegaBurgerMenu.onclick = toggleMenu;
function toggleMenu() {
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
}

