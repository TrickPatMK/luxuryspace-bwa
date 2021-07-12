import { addClass, removeClass } from "./utils-class";

const menuTogglerId = document.getElementById("menu-toggler");
menuTogglerId.addEventListener("click", function () {
  const menuId = document.getElementById("menu");
  if (menuId.className.indexOf("opacity-0") > -1) {
    addClass(menuTogglerId, "fixed top-0 right-0");
    removeClass(menuTogglerId, "relative");
    removeClass(menuId, "opacity-0 invisible");
    addClass(menuId, "opacity-100 z-30");
    console.log(menuId.classList);
  } else {
    removeClass(menuTogglerId, "fixed top-0 right-0");
    addClass(menuTogglerId, "relative");
    addClass(menuId, "opacity-0 invisible");
    removeClass(menuId, "opacity-100 z-30");
  }
});
