export default function hiddenNavbar() {
  window.onscroll = function () {
    scrollFunction();
    function scrollFunction() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        if (
          document.body.scrollTop > 20 ||
          document.documentElement.scrollTop > 50
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
  };
}
