import { FC, useEffect } from "react";

import logo from "../../../assets/logo.png";
import tuberculoseImg from "../../../assets/tuberculose.png";
import tabagismeImg from "../../../assets/tabagisme.png";
import actualite1 from "../../../assets/actualite-1.png";
import actualite2 from "../../../assets/actualite-2.png";
import actualite3 from "../../../assets/actualite-3.png";
import formations from "../../../assets/formations.png";
import documentations from "../../../assets/documentations.png";
import soutien1 from "../../../assets/francophones-bx.png";
import soutien2 from "../../../assets/commission-cc.png";
import soutien3 from "../../../assets/inami.png";
import soutien4 from "../../../assets/unknown-soutien.png";
import soutien5 from "../../../assets/wallonie-fsh.png";
import socials from "../../../assets/List.png";
import mail from "../../../assets/mail.svg";
import hand from "../../../assets/hand.png";
import "./styles.css";

export const Content: FC = () => {
  useEffect(() => {
    const headerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const hexagonsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    const hexagonsContainerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
    const particlesObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const header = document.querySelector(".header");
    const resourcesCards = document.querySelectorAll(".resources-card");
    const mainHexagons = document.querySelectorAll(".hexagon-content");
    const particles = document.querySelectorAll(".particles svg");
    resourcesCards.forEach((el) => observer.observe(el));
    mainHexagons.forEach((el) => hexagonsObserver.observe(el));
    particles.forEach((el) => particlesObserver.observe(el));

    const hexagonsContainer = document.querySelector(".actualites-hexagons");

    if (hexagonsContainer) {
      hexagonsContainerObserver.observe(hexagonsContainer);
    }
    if (header) {
      headerObserver.observe(header);
    }

    return () => {
      resourcesCards.forEach((el) => observer.unobserve(el));
      mainHexagons.forEach((el) => hexagonsObserver.unobserve(el));
      particles.forEach((el) => particlesObserver.unobserve(el));
      if (hexagonsContainer) {
        hexagonsContainerObserver.unobserve(hexagonsContainer);
      }
      if (header) {
        headerObserver.unobserve(header);
      }
    };
  }, []);

  return (
    <>
      <div className="members grid col-span-12 items-center justify-end py-4">
        <ul className="flex gap-8">
          <li className="uppercase exo-700 text-xs">
            <a href="#">offres d'emploi</a>
          </li>
          <li className="uppercase exo-700 text-xs">
            <a href="#">espace membre</a>
          </li>
        </ul>
      </div>
      <nav className="header-nav flex col-span-12 justify-between">
        <img src={logo} width="200px" />
        <div className="flex items-center">
          <ul className="flex items-center exo-800 gap-8 uppercase tracking-widest">
            <li>
              <a className="header-nav-link" href="#">
                tuberculose
              </a>
            </li>
            <li>
              <a href="#">tabagisme</a>
            </li>
            <li>
              <a href="#">fares</a>
            </li>
            <li>
              <a href="#">actualités</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
            <li>
              <button className="gift-button uppercase py-4 px-9 tracking-widest flex gap-2">
                <img src={hand} />
                faire un don
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <header className="header flex flex-col col-span-12 gap-8 exo-700 mt-12">
        <h1>
          Ensemble contre les
          <span className="block gradient-text mt-2">
            affections respiratoires
          </span>
        </h1>
        <p className="inter-400 text-lg leading-8 max-w-2xl">
          Au FARES, l'Humain se trouve à l'intersection des trois valeurs clé
          vécues en interne et manifestées en externe n'ayant que pour finalité
          le&nbsp;
          <span className="inter-700">
            bien-être des individus dans leur santé mentale et/ou physique.
          </span>
        </p>
      </header>

      <div className="main-content grid grid-cols-12 gap-8 col-span-12">
        <div className="hexagon-content  col-start-3 col-end-6">
          <h3 className="exo-700 hexagon-content-title">Tuberculose</h3>
          <p className="inter-400 text-sm">
            Le FARES est chargé d'améliorer la prise en charge et le suivi des
            patients tuberculeux et d'organiser le dépistage parmi les sujets à
            risque.
          </p>
          <button className="hexagon-button hexagon-button-red inter-700 ">
            en savoir plus
          </button>
          <svg viewBox="0 0 286 321" fill="none">
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="#E4032E"
            />
          </svg>
          <img src={tuberculoseImg} />
        </div>
        <div className="hexagon-content hexagon-content-white col-start-8 col-end-11">
          <h3 className="exo-700 hexagon-content-title">Tabagisme</h3>
          <p className="inter-400 text-sm">
            L'équipe du Service Prévention Tabac met depuis 30 ans ses
            compétences au service des professionnels-relais des secteurs de
            l'éducation, de la santé et du social.
          </p>
          <button className="hexagon-button inter-700 ">en savoir plus</button>
          <svg width="100%" viewBox="0 0 286 321" fill="none">
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="white"
            />
          </svg>
          <img src={tabagismeImg} />
        </div>
        <div
          className="pink-container grid grid-cols-12 justify-center items-baseline gap-y-16
       col-span-12 mt-20"
        >
          <div className="col-start-2 col-end-6 ">
            <h3 className=" exo-700 text-5xl mb-4">Nos ressources</h3>
            <p className="inter-400  text-lg leading-8 ">
              Sed ac maximus urna. Curabitur dui odio, vulputate sed leo vitae,
              <span className="inter-700">vehicula commodo sapien</span>. Nullam
              laoreet dictum magna.
            </p>
          </div>
          <div className="flex col-start-2 col-end-12 justify-between ">
            <div className="resources-card">
              <img src={documentations} />
              <div className="flex flex-col gap-y-4">
                <h4 className="exo-600 text-3xl">Documentations</h4>
                <p>
                  Sed ac maximus urna. Curabitur dui odio, vulputate sed leo
                  vitae.
                </p>
                <ul className="inter-300 text-base">
                  <li className="button-link-effect">
                    <a href="#">
                      <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <g clip-path="url(#clip0_1_671)">
                          <path
                            d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                            stroke="#E4032E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_671">
                            <rect width="6" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Tuberculose
                    </a>
                  </li>
                  <li className="button-link-effect">
                    <a href="#">
                      <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <g clip-path="url(#clip0_1_671)">
                          <path
                            d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                            stroke="#E4032E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_671">
                            <rect width="6" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Tabagisme
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="resources-card">
              <img src={formations} />
              <div className="flex flex-col gap-y-4">
                <h4 className="exo-600 text-3xl">Formations</h4>
                <p>
                  Vivamus metus nisl, tristique et justo pulvinar, congue auctor
                  justo
                </p>
                <ul className="inter-300 text-base">
                  <li className="button-link-effect">
                    <a href="#">
                      <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <g clip-path="url(#clip0_1_671)">
                          <path
                            d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                            stroke="#E4032E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_671">
                            <rect width="6" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Tuberculose
                    </a>
                  </li>
                  <li className="button-link-effect">
                    <a href="#">
                      <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                        <g clip-path="url(#clip0_1_671)">
                          <path
                            d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                            stroke="#E4032E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_1_671">
                            <rect width="6" height="12" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Tabagisme
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="actualites-container grid grid-cols-12 justify-center items-baseline gap-y-16
       col-span-12 mt-20"
      >
        <h3 className="col-span-12 exo-700 text-5xl leading-tight">
          Les dernières actualités <br />
          du FARES
        </h3>
        <ul className="col-span-12 grid grid-cols-12 gap-8">
          <li className="actualites-card col-start-1 col-end-5">
            <div className="actualite-card-image">
              <img src={actualite1} />
              <div className="exo-600 text-sm">tag name</div>
            </div>
            <div className="flex flex-col gap-4 p-6  justify-between flex-1">
              <h4 className="exo-600 text-lg">
                La rifampicine désormais remboursée pour le traitement de
                l'infection tuberculose latente
              </h4>
              <p className="inter-300 text-base">
                Depuis le 1er mai 2024, la rifampicine est remboursée pour le
                traitement de l’infection tuberculose latente (ITL)...
              </p>
              <a href="#" className="inter-300 text-base">
                <span>Lire la suite</span>
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                  <g clip-path="url(#clip0_1_671)">
                    <path
                      d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                      stroke="#E4032E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_671">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </li>
          <li className="actualites-card col-start-5 col-end-9 ">
            <div className="actualite-card-image">
              <img src={actualite2} />
              <div className="exo-600 text-sm">tag name</div>
            </div>
            <div className="flex flex-col gap-4 p-6  justify-between flex-1">
              <h4 className="exo-600 text-lg">
                Manque d'accès au traitement optimal de la TB-MDR et aux tests
                de résistance en Europe
              </h4>
              <p className="inter-300 text-base">
                Vivamus mollis odio ut lacus elementum, at congue elit
                malesuada. Integer lacinia in nulla vel consequat.
              </p>
              <a href="#" className="inter-300 text-base">
                <span>Lire la suite</span>
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                  <g clip-path="url(#clip0_1_671)">
                    <path
                      d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                      stroke="#E4032E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_671">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </li>
          <li className="actualites-card col-start-9 col-end-13">
            <div className="actualite-card-image">
              <img src={actualite3} />
              <div className="exo-600 text-sm">tag name</div>
            </div>
            <div className="flex flex-col gap-4 p-6 justify-between flex-1">
              <h4 className="exo-600 text-lg">
                Journée internationale de lutte pour les droits des femmes
              </h4>
              <p className="inter-300 text-base">
                Vivamus mollis odio ut lacus elementum, at congue elit
                malesuada. Integer lacinia in nulla vel consequat.
              </p>
              <a href="#" className="inter-300 text-base">
                <span>Lire la suite</span>
                <svg width="6" height="12" viewBox="0 0 6 12" fill="none">
                  <g clip-path="url(#clip0_1_671)">
                    <path
                      d="M0.75 11.25L4.74796 6.58571C5.03685 6.24867 5.03685 5.75133 4.74796 5.41429L0.75 0.75"
                      stroke="#E4032E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_671">
                      <rect width="6" height="12" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </li>
        </ul>
        <div className="flex justify-center col-span-12">
          <a
            href="#"
            className="actualites-seemore button-link-effect uppercase exo-700"
          >
            voir toutes les actualités
          </a>
        </div>
        <div className="actualites-hexagons">
          <svg
            width="286"
            height="321"
            viewBox="0 0 286 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="#EEEEEF"
            />
          </svg>
          <svg
            width="286"
            height="321"
            viewBox="0 0 286 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="#EEEEEF"
            />
          </svg>
          <svg
            width="286"
            height="321"
            viewBox="0 0 286 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="#EEEEEF"
            />
          </svg>
          <svg
            width="286"
            height="321"
            viewBox="0 0 286 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="#EEEEEF"
            />
          </svg>
          <svg
            width="286"
            height="321"
            viewBox="0 0 286 321"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M273.435 72.6312C279.7 76.2485 284.831 85.0771 284.846 92.2855L285.096 229.865C285.111 237.073 280.007 245.913 273.757 249.504L154.485 318.078C148.235 321.669 138.023 321.64 131.758 318.023L12.2766 249.04C6.0113 245.423 0.880626 236.594 0.865582 229.386L0.615925 91.8062C0.60088 84.5978 5.70449 75.7581 11.9547 72.1669L131.187 3.5702C137.437 -0.0209881 147.648 0.00797387 153.913 3.62522L273.395 72.608L273.435 72.6312Z"
              fill="#EEEEEF"
            />
          </svg>
        </div>
      </div>
      <div className="soutien grid grid-cols-12 gap-8 col-span-12">
        <h5 className="col-span-12 exo-600 text-sm">Avec le soutien de</h5>
        <ul className="col-span-12 flex">
          <li>
            <img src={soutien1} />
          </li>
          <li>
            <img src={soutien2} />
          </li>
          <li>
            <img src={soutien3} />
          </li>
          <li>
            <img src={soutien4} />
          </li>
          <li>
            <img src={soutien5} />
          </li>
        </ul>
      </div>
      <footer className="footer grid grid-cols-12 gap-8 col-span-12 pt-14 mb-8">
        <img src={logo} className="col-start-1 col-end-4" />
        <div className="col-start-7 col-span-3 flex flex-col justify-between">
          <div className="mb-4">
            <h5 className="exo-600 text-lg mb-3">Nous contacter</h5>
            <p className="inter-300 leading-normal">
              FARES asbl - siège social
            </p>
            <p className="inter-300 leading-normal">
              1000 Bruxelles (Belgique)
            </p>
            <p className="inter-300 leading-normal">Tél. 02 512 29 36</p>
          </div>
          <p className="inter-300 leading-normal my-2">
            N° d'entreprise BE 0422 618 805
          </p>
        </div>
        <div className="footer-socials col-start-10 col-span-3 flex flex-col justify-between">
          <div>
            <h5 className="exo-600 text-lg mb-3">Suivez-nous</h5>
            <img src={socials} />
          </div>
          <button className="flex justify-center items-center uppercase exo-700 px-6 py-3">
            <img src={mail} className="mr-2" />
            S'inscrire à la newsletter
          </button>
        </div>
      </footer>
      <div className="mentions mt-4 grid col-span-12 items-center py-7 barlow-regular">
        <span>FARES ASBL</span>
        <div>
          <a href="#" className="underline ">
            mentions légales
          </a>
          <a href="#" className="ml-1 underline ">
            En savoir plus sur notre politique vie privée et cookies
          </a>
          <a href="#" className="pipe">
            Privacy Policy
          </a>
          <a href="#" className="pipe">
            Cookie
          </a>
          <a href="#" className="pipe">
            Sitemap
          </a>
        </div>
      </div>
      <div className="particles">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="circle"
        >
          <circle cx="9" cy="9" r="7.5" stroke="#D3D3D3" stroke-width="3" />
        </svg>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="circle2"
        >
          <circle cx="9" cy="9" r="7.5" stroke="#D3D3D3" stroke-width="3" />
        </svg>

        <svg
          className="cross"
          width="19"
          height="28"
          viewBox="0 0 19 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.0006 7.06704C14.8997 6.88262 14.6682 6.81552 14.4827 6.91696L9.91688 9.41413C9.73141 9.51557 9.4999 9.44848 9.39903 9.26405L8.45045 7.52967C8.34959 7.34525 8.41799 7.11412 8.60347 7.01268L11.4921 5.4328C11.6776 5.33136 11.746 5.10023 11.6451 4.91581L10.4068 2.65169C10.306 2.46727 10.0745 2.40017 9.88899 2.50161L7.00033 4.0815C6.81485 4.18294 6.58334 4.11584 6.48248 3.93142L4.77847 0.815811C4.6776 0.631386 4.44609 0.564293 4.26062 0.665734L1.98362 1.91108C1.79815 2.01252 1.72974 2.24365 1.83061 2.42807L3.53462 5.54368C3.63548 5.72811 3.56708 5.95923 3.3816 6.06067L0.492937 7.64056C0.307463 7.742 0.239057 7.97312 0.339924 8.15755L1.57823 10.4217C1.67909 10.6061 1.9106 10.6732 2.09608 10.5717L4.98474 8.99186C5.17022 8.89041 5.40173 8.95751 5.50259 9.14193L6.45117 10.8763C6.55204 11.0607 6.48363 11.2919 6.29816 11.3933L1.73233 13.8905C1.54686 13.9919 1.47845 14.223 1.57932 14.4075L2.81762 16.6716C2.91848 16.856 3.15 16.9231 3.33547 16.8217L7.9013 14.3245C8.08677 14.223 8.31828 14.2901 8.41915 14.4746L15.6465 27.6891C15.7474 27.8735 15.9789 27.9406 16.1644 27.8392L18.4414 26.5938C18.6268 26.4924 18.6952 26.2613 18.5944 26.0768L11.367 12.8623C11.2661 12.6779 11.3345 12.4468 11.52 12.3453L16.0858 9.84815C16.2713 9.74671 16.3397 9.51558 16.2389 9.33116L15.0006 7.06704Z"
            fill="#E4032E"
          />
        </svg>
        <svg
          className="halfcircle"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2846 6.88563C16.3991 2.45513 11.2893 0.407524 6.87258 2.2871C2.45588 4.16668 0.380672 9.28827 2.26025 13.705L18.2846 6.88563Z"
            stroke="#D3D3D3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="halfcircle2"
        >
          <path
            d="M14.3384 16.5202C17.7431 13.1155 17.7325 7.61063 14.3384 4.21651C10.9443 0.8224 5.41825 0.811794 2.02413 4.20591L14.3384 16.5202Z"
            stroke="#D3D3D3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <svg
          className="triangle2"
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.2889 13.8469L13.6152 1.7244L1.49277 6.39806L18.2889 13.8469Z"
            stroke="#D3D3D3"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <svg
          className="flower"
          width="29"
          height="27"
          viewBox="0 0 29 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.5419 12.8505C16.7802 13.4634 16.6729 14.1275 16.3108 14.6253C17.1499 15.1908 18.2549 15.8791 19.4097 16.4416C21.4328 17.4252 23.2238 17.9493 24.5505 17.9937C26.5623 18.0573 28.3612 17.0998 28.6025 15.3868C28.8438 13.6737 27.3823 12.2913 25.4345 11.7909C23.8067 11.3719 22.4654 11.419 19.9496 11.8965L19.9516 11.9014C18.7101 12.1366 17.4859 12.5163 16.5419 12.8505ZM16.2602 14.6916C16.066 14.9349 15.808 15.1333 15.4978 15.259C15.2017 15.3791 14.8935 15.4184 14.5975 15.3874C14.5239 16.3966 14.4762 17.6955 14.5629 18.9712C14.71 21.2175 15.1431 23.0225 15.766 24.1912C16.7123 25.9594 18.4405 27.0225 20.0477 26.3711C21.6549 25.7197 22.1334 23.7564 21.5983 21.8272C21.1549 20.2091 20.4452 19.0812 18.7779 17.1487C17.9583 16.1996 17.0204 15.3369 16.2602 14.6916ZM14.5212 15.3778C13.9108 15.2884 13.3619 14.8991 13.0916 14.3032C12.1784 14.7514 11.0248 15.3701 9.95871 16.0944C8.09154 17.3649 6.74064 18.6487 6.03883 19.7779C4.98023 21.4855 4.92136 23.507 6.29022 24.5617C7.66401 25.6144 9.59713 25.0306 11.0059 23.5921C12.1832 22.39 12.806 21.2073 13.6475 18.7943C14.0617 17.6055 14.3415 16.3593 14.5212 15.3778ZM19.6294 10.9647C18.5641 11.6855 17.412 12.3021 16.4992 12.7496C16.2281 12.1568 15.6753 11.7704 15.0635 11.6838C15.2432 10.7012 15.5233 9.45172 15.9386 8.25989L15.9406 8.26479C16.7821 5.85184 17.4098 4.66711 18.5822 3.46703C19.991 2.0285 21.929 1.44273 23.2979 2.49744C24.6667 3.55215 24.6079 5.57366 23.5493 7.28123C22.8524 8.40841 21.4965 9.69423 19.6294 10.9647ZM14.8706 11.6665L15.0221 8.0948C14.8702 5.85053 14.437 4.04555 13.8141 2.87685C12.8678 1.10865 11.1446 0.0434708 9.53243 0.696904C7.92521 1.34834 7.44669 3.31164 7.98179 5.2408C8.42821 6.85204 9.13989 7.98476 10.8052 9.91244C11.6281 10.8653 12.5697 11.73 13.3311 12.375C13.5261 12.1294 13.7856 11.9292 14.097 11.803C14.3505 11.7002 14.6136 11.6569 14.8706 11.6665ZM13.2942 12.423C12.4695 11.8593 11.3839 11.1794 10.2434 10.6367C7.93871 9.53893 6.65449 9.14623 4.97448 9.13655C2.96083 9.12513 1.18269 10.0913 0.965087 11.8061C0.747485 13.521 2.23269 14.9052 4.1922 15.3496C5.48701 15.6409 7.35047 15.5934 9.56727 15.1572C10.8313 14.9071 12.0828 14.5222 13.0442 14.1888C12.8131 13.5761 12.9281 12.9158 13.2942 12.423Z"
            fill="#E4032E"
          />
        </svg>
        <svg
          className="rectangle"
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.7765"
            y="5.59042"
            width="15.6538"
            height="15.6538"
            rx="2.5"
            transform="rotate(-17.5056 1.7765 5.59042)"
            stroke="#D3D3D3"
            stroke-width="3"
          />
        </svg>
        <svg
          className="rectangle2"
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.7765"
            y="5.59042"
            width="15.6538"
            height="15.6538"
            rx="2.5"
            transform="rotate(-17.5056 1.7765 5.59042)"
            stroke="#D3D3D3"
            stroke-width="3"
          />
        </svg>
        <svg
          className="rectangle3"
          width="23"
          height="22"
          viewBox="0 0 23 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="1.7765"
            y="5.59042"
            width="15.6538"
            height="15.6538"
            rx="2.5"
            transform="rotate(-17.5056 1.7765 5.59042)"
            stroke="#D3D3D3"
            stroke-width="3"
          />
        </svg>
      </div>
    </>
  );
};
