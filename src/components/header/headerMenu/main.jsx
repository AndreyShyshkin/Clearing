import "./style.css";

import instagram from "/src/assets/images/instagram.svg";
import facebook from "/src/assets/images/facebook.svg";
import whats_app from "/src/assets/images/whats-app.svg";
import logo from "/src/assets/images/logo.svg";
import menu from "/src/assets/images/menu.svg";
import { useEffect } from "react";

function HeaderMenu() {
  useEffect(() => {
    const switcherBlock = document.querySelectorAll(
      ".menu .container .switcher  .switcherBlock"
    );
    const switcherBlockMenu = document.querySelectorAll(
      ".menuHeader .switcher  .switcherBlock"
    );
    const currentPage = window.location.pathname;

    if (currentPage.includes("pages/office")) {
      switcherBlock[0].classList.remove("switcherActive");
      switcherBlock[1].classList.add("switcherActive");
      switcherBlockMenu[0].classList.remove("switcherActive");
      switcherBlockMenu[1].classList.add("switcherActive");
    } else if (currentPage.includes("/")) {
      switcherBlock[1].classList.remove("switcherActive");
      switcherBlock[0].classList.add("switcherActive");
      switcherBlockMenu[1].classList.remove("switcherActive");
      switcherBlockMenu[0].classList.add("switcherActive");
    }
  }, []);

  return (
    <>
      <div className="menu">
        <div className="container">
          <a href="/index.html">
            <img src={logo} alt="logo" />
          </a>
          <div className="switcher">
            <a href="/">
              <p className="switcherBlock">Дім</p>
            </a>
            <a href="/pages/office/">
              <p className="switcherBlock">Офіс</p>
            </a>
          </div>
          <div className="menuLinks">
            <a href="/pages/afterrenovation/">Після ремонту</a>
            <a href="/pages/calculator/">Розрахунок вартості</a>
          </div>
          <div className="social">
            <a href="#">
              <img src={instagram} alt="instagram" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={whats_app} alt="whats-app" />
            </a>
          </div>
          <a href="tell:+48534517801" className="tell">
            +48 534 517 801
          </a>
          <img
            src={menu}
            onClick={() => openMenu()}
            alt="menu"
            className="menuIcon"
          />
        </div>
      </div>
    </>
  );
}

export default HeaderMenu;

function openMenu() {
  const menuClick = document.querySelectorAll(".menuClick");

  menuClick.forEach((element) => {
    element.style.display = "block";
  });
}
