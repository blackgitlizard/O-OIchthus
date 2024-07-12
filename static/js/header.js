/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("headernav");
    if (x.className === "headernav") {
      x.className += " responsive";
    } else {
      x.className = "headernav";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
var x = document.getElementById("header");
if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    if (!x.classList.contains("scrolled")) {
    x.classList.add("scrolled");
    }
}else
{
    if (x.classList.contains("scrolled")) {
    x.classList.remove("scrolled");
    }
}
}