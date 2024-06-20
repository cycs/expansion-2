import { FC } from "react";
import {
  LinkHeader,
  LinksContainer,
  MainButtonMail,
  MainLinks,
  NavBar,
  StyledHeader,
} from "./styles";
import logo1x from "../../../assets/expansion-logo-x1.png";
import logo2x from "../../../assets/expansion-logo-x2.png";
import mailIcon from "../../../assets/email.svg";

export const Header: FC = () => {
  return (
    <StyledHeader>
      <NavBar>
        <MainLinks>
          <img
            src={logo1x}
            alt="Digital Booster - A solution of Expansion"
            style={{ marginRight: "40px", height: "80px" }}
            srcSet={`${logo1x} 1x, ${logo2x} 2x`}
          />
          <LinksContainer>
            <LinkHeader>
              <a href="#">Bienvenue</a>
            </LinkHeader>
            <LinkHeader>
              <a href="#">Nos métiers</a>
            </LinkHeader>
            <LinkHeader>
              <a href="#">Notre méthodologie</a>
            </LinkHeader>
            <LinkHeader>
              <a href="#">L'agence</a>
            </LinkHeader>
            <LinkHeader>
              <a href="#">Blog</a>
            </LinkHeader>
          </LinksContainer>
        </MainLinks>
      </NavBar>

      <NavBar>
        <LinksContainer>
          <LinkHeader>
            <a href="#">Contact</a>
          </LinkHeader>
          <MainButtonMail>
            <span>Prendre un rendez-vous</span>
            <img src={mailIcon} alt="Prendre un rendez-vous" />
          </MainButtonMail>
        </LinksContainer>
      </NavBar>
    </StyledHeader>
  );
};
