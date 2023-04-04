import { useRef } from "react";

import Modelo1 from "../../assets/Modelo_01.png";
import Modelo2 from "../../assets/Modelo_02.png";
import Logo from "../../assets/logo-my-dress.svg";
import WhatsappLogo from "../../assets/whatsapp.svg";
import InstagramLogo from "../../assets/instagram.svg";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Home.css";

export const Home = () => {
  const navRef = useRef<HTMLElement>(null);

  function toggleNav() {
    navRef.current?.classList.toggle("active");
  }

  return (
    <div className="Home">
      <header>
        <div className="logo">
          <img src={Logo} alt="Logo My Dress" />
          <div className="logoText">
            <p className="first">My</p>
            <p className="second">DRESS</p>
          </div>
        </div>
        <nav ref={navRef}>
          <ul className="navbarLinks">
            <a href="">
              <li>SOBRE</li>
            </a>
            <a href="">
              <li>SERVIÇOS</li>
            </a>
            <a href="">
              <li>CASES</li>
            </a>
          </ul>
          <button
            onClick={() => toggleNav()}
            className="toggleButton closeButton"
          >
            <CloseIcon fontSize="large" />
          </button>
        </nav>
        <button className="navbarButton">CONTATE-NOS</button>
        <button onClick={() => toggleNav()} className="toggleButton openButton">
          <MenuIcon fontSize="large" />
        </button>
      </header>
      <main>
        <section className="mainText">
          <div className="title">
            <div>
              <h1>
                O melhor custo-beneficio em
                <strong>aluguel de vestidos</strong>.
              </h1>
            </div>
            <h2>Belém-Pa.</h2>
          </div>
          <div className="contato">
            <h2>Entre em contato conosco!</h2>
            <div className="buttonsContato">
              <a
                href="https://api.whatsapp.com/send/?phone=5591986193464&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                <button>
                  Whatsapp
                  <img src={WhatsappLogo} alt="" className="whatsappLogo" />
                </button>
              </a>
              <a
                href="https://instagram.com/mydress.aluguel?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <button>
                  Instagram
                  <img src={InstagramLogo} alt="" className="instagramLogo" />
                </button>
              </a>
            </div>
          </div>
        </section>
        <section className="modelos">
          <img src={Modelo1} alt="Foto Modelo 1" />
          <img src={Modelo2} alt="Foto Modelo 1" />
        </section>
      </main>
      <footer>
        <div className="footerText">
          <p>
            Developed by{" "}
            <a href="https://linkedin.com/in/juaoantonio">
              João Antônio - Web Developer
            </a>{" "}
          </p>
        </div>
      </footer>
    </div>
  );
};
