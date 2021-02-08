export default function hiddenNavbar() {
  return(
  window.onscroll = function () {
    scrollFunction();
  })
  function scrollFunction() {
    if (window.matchMedia("(max-width: 768px)").matches) {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 300
      ) {
        document.getElementById("navbar-hidden").style.top = "0";
      } else {
        document.getElementById("navbar-hidden").style.top = "-50px";
      }
    } else {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("navbar-hidden").style.top = "0";
      } else {
        document.getElementById("navbar-hidden").style.top = "-50px";
      }
    }
  }
}
