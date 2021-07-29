


// paralax effect
const parallax = document.getElementById("item1")
const parallax2 = document.getElementById("item2")
const parallax3 = document.getElementById("item3")
const parallax4 = document.getElementById("item4")
const parallax5 = document.getElementById("item5")
const parallax6 = document.getElementById("item6")
const parallax7 = document.getElementById("item7")
const parallax8 = document.getElementById("item8")
const parallax9 = document.getElementById("item9")

const parallax10 = document.getElementById("about")
const parallax11 = document.getElementById("experiments")

const parallax12 = document.getElementById("experiments")


// window.addEventListener("scroll", function() {
//     let Offset = window.pageYOffset;
//     parallax.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax2.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax3.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax4.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax5.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax6.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax7.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax8.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax9.style.backgroundPositionY = Offset * 0.7 + "px";

//     parallax10.style.backgroundPositionY = Offset * 0.7 + "px";
//     parallax11.style.PositionY = Offset * 0.7 + "px";


// })


const menu = document.querySelector("#mobile_menu")
const menuLinks = document.querySelector('.sidenav')


menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})
