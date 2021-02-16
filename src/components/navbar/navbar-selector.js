import NavbarMobile from "./navbar-mobile";
import Navbar from "./navbar"

export default function NavbarSelector() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    return NavbarMobile();
  } else {
    return Navbar();
  }
}
