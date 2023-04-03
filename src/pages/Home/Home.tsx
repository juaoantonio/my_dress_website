import Logo from "../../assets/logo-my-dress.svg";
import Modelo1 from "../../assets/Modelo_01.png";
import Modelo2 from "../../assets/Modelo_02.png";
import WhatsappLogo from "../../assets/whatsapp.svg";
import InstagramLogo from "../../assets/instagram.svg";
import "./Home.css";

export const Home = () => {
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={Logo} alt="Logo My Dress" />
            <div className="logoText">
              <p className="first">MY</p>
              <p className="second">DRESS</p>
            </div>
          </div>
          <ul className="navbarLinks">
            <li>SOBRE</li>
            <li>SERVIÇOS</li>
            <li>CASES</li>
          </ul>
          <button className="navbarButton">CONTATE-NOS</button>
        </nav>
      </header>

      <main>
        <section className="mainText">
          <div className="title">
            <div>
              <h1>
                O melhor custo-beneficio em <strong>aluguel de vestidos</strong>
                .
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
                  <span>
                    <img src={WhatsappLogo} alt="" className="whatsappLogo" />
                  </span>
                </button>
              </a>
              <a
                href="https://instagram.com/mydress.aluguel?igshid=YmMyMTA2M2Y="
                target="_blank"
              >
                <button>
                  Instagram
                  <span>
                    <img src={InstagramLogo} alt="" className="instagramLogo" />
                  </span>
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
    </>
  );
};
