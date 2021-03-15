export default function hiddenNavbar() {
  window.onscroll = function () {
    scrollFunction();
    function scrollFunction() {
      if (
        document.body.scrollTop > 40 ||
        document.documentElement.scrollTop > 40
      ) {
        document.getElementById("navbar-hidden").style.top = "0";
      } else {
        document.getElementById("navbar-hidden").style.top = "-50px";
      }
    }
  };
}
