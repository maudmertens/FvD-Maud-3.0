// JavaScript Document
console.log("hi");

// oke dit is voor het kruisje, maar doet t nu niet meer
var vegaBurgerMenu = document.querySelector("header button");
vegaBurgerMenu.onclick = vegaBurgerMenuKlik;
function vegaBurgerMenuKlik() {
    var deNav = document.querySelector("header nav");
    deNav.classList.toggle("toonMenu");
    if (vegaBurgerMenu.ariaExpanded == "true") {
        vegaBurgerMenu.ariaExpanded = "false"
    }
    else {
        vegaBurgerMenu.ariaExpanded = "true"
    }
}


