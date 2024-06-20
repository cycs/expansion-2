import { animated } from "@react-spring/web";
import styled, { keyframes } from "styled-components";

const borderAnimation = keyframes`
  0% {
    width: 0;
    left: 0; 
  }
  33% {
    width: 30%;
    left: 0; 
  }
  66% {
    width: 0;
    left: 100%; 
  }
  66.1% {
    width: 0;
    left: 0; 
  }
  100% {
    width: 30%;
    left: 0; 
  }
`;

export const StyledHeader = styled.header`
    z-index: 2;
    margin: 0 auto;
    max-width: 1280px;
    height: 113px;
    align-self: baseline;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    /* height: 7rem; */
    padding-right: 2rem;
    padding-left: 2rem;
`

export const NavBar = styled.nav`

`

export const MainLinks = styled.div`
    display: flex;
      justify-content: center;
   align-items: center;
`

export const LinksContainer = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
`


export const LinkHeader = styled.li`
    display: flex;
    transition: 0.2s ease;
    position: relative; 
    a {
        transition: 0.2s ease;
        padding: 8px 0;
        border-bottom: 1px solid transparent;
    }

    &:hover:after {
        content: '';
        position: absolute;
        display: block;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 1px;
        background: #E75336;
        animation: ${borderAnimation} 0.5s ease-in;
    }
`

export const MainButton = styled.button`
    background: #E75336;
    padding: 0.8rem 2rem; 
    border-radius: 99px;
    color: white;
    border: none;
    transition: .2s ease;
    width: fit-content;
    pointer-events: all;
    font-size: 0.88rem; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    position: relative;
    overflow: hidden;

    &:hover {
        background: #be523d;
        outline: none;
    }
`
export const MainButtonMail = styled(MainButton)`
    img {
        display: none; 
        width: 20px;
    }   

    @media (max-width: 1100px) {
        padding: 1rem;
        span {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }

        img {
            display: block; 
        }
  }

 
`

export const AnimatedContainer = styled(animated.div)`
    display: flex;
    align-items: center;
`;

export const AnimatedImg = styled(animated.img)`
    // transition: transform 0.1s ease;
`;

export const AnimatedText = styled(animated.span)`
    white-space: nowrap;
    // transition: transform 0.2s ;

`;

