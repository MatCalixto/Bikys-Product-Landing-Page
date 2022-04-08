// make menu disappear or appear
const header = document.getElementById("header");
const background = document.getElementById("formSection");
let scroll = document.scrollingElement.scrollTop;
let xvalue = "center";
let yvalue = scroll * 0.5;
background.style.backgroundPosition = xvalue + " " + yvalue + "px";
document.getElementById("body").onscroll = function myFunc() {
  let scroll = document.scrollingElement.scrollTop;
  let xvalue = "center";
  let yvalue = scroll * 0.5;
  background.style.backgroundPosition = xvalue + " " + yvalue + "px";
  if (scroll == 0) {
    // make header white or invisible
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "";
  }
  else {
    header.style.transition = "all 0.3s ease-in-out";
    header.style.background = "white";
  }
}