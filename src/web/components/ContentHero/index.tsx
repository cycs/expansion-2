import { FC, useState } from "react";
import {
  AnimatedContainer,
  AnimatedImg,
  AnimatedText,
  MainButton,
} from "../Header/styles";
import spaceShipSVG from "../../../assets/spaceship.svg";
import { config, useSpring } from "@react-spring/web";
import { Computer } from "../Computer";
import { MainContent } from "./styles";
export const ContentHero: FC = () => {
  console.log("hero");
  const [hovered, setHovered] = useState(false);

  const rotation = useSpring({
    transform: hovered ? "rotate(-130deg)" : "rotate(0deg)",
    config: { mass: 1, tension: 180, friction: 15 },
    delay: hovered ? 0 : 200,
  });

  const translation = useSpring({
    transform: hovered ? "translateX(-500%)" : "translateX(0%)",
    config: { mass: 5, tension: 2000, friction: 200, duration: 200 },
    delay: hovered ? 200 : 100,
  });

  const translationText = useSpring({
    transform: hovered ? "translateX(-10px)" : "translateX(0px)",
    config: config.wobbly,
    delay: hovered ? 200 : 0,
  });

  return (
    <MainContent className="main">
      <div
        style={{
          maxWidth: "456px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          marginTop: "8px",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            margin: 0,
            fontWeight: "inherit",
            maxWidth: "460px",
          }}
        >
          Nous vous accompagnons
          <br /> dans votre
          <span style={{ color: "#E75336" }}> expansion digitale</span>
        </h2>
        <p style={{ fontSize: "18px", margin: 0, lineHeight: 1.5 }}>
          Le programme Digital Booster d’Expansion est
          <br />
          <b>
            l’atout digital des petites, moyennes et <br />
            grandes entreprises&nbsp;
          </b>
          qui souhaitent développer <br />
          ou confirmer leur présence en ligne.
        </p>
        <MainButton
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <AnimatedContainer style={translation}>
            <AnimatedImg style={rotation} src={spaceShipSVG} alt="Spaceship" />
          </AnimatedContainer>
          <AnimatedText style={translationText}>
            Faites le test sans plus tarder
          </AnimatedText>
        </MainButton>
      </div>
      <Computer />
    </MainContent>
  );
};
