import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "./styles/App.module.css";
const background = require("./assets/bg-desktop.svg").default;
const ilustration = require("./assets/illustration-mockups.svg").default;
const logo = require("./assets/logo.svg").default;

export const App = () => {
  const {
    container,
    imageBackground,
    content,
    logoContainer,
    pageContent,
    infoContainer,
    socialsContainer,
    attribution,
  } = styles;
  return (
    <>
      <main className={container}>
        <img className={imageBackground} src={background} alt="background" />
        <div className={content}>
          <div className={logoContainer}>
            <img src={logo} alt="logo" />
          </div>

          <div className={pageContent}>
            <img src={ilustration} alt="ilustration" />
            <div className={infoContainer}>
              <h1> Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{" "}
              </p>
              <button>Register</button>
            </div>
          </div>
          <div className={socialsContainer}>
            <div>
              <FaFacebookF />
            </div>
            <div>
              <FaTwitter />
            </div>
            <div>
              <FaInstagram />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p className={attribution}>
          Challenge by{" "}
          <a
            href="https://www.frontendmentor.io/challenges/huddle-landing-page-with-a-single-introductory-section-B_2Wvxgi0"
            target="_blank"
            rel="noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            href="https://www.linkedin.com/in/luispintodev"
            target="_blank"
            rel="noreferrer"
          >
            Luís Pinto
          </a>
          .
        </p>
      </footer>
    </>
  );
};
