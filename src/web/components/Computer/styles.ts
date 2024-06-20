import styled, { css } from "styled-components";
import cross2 from "../../../assets/cross2.svg";
import { animated } from "@react-spring/web";


export const ComputerParentContainer = styled(animated.div)`
    z-index: -1;
    width: 67%;
    height: 100%;
    display: flex;
    align-items: center;
    position: absolute;
    top: 5.7rem;
    right: -6rem;
    margin-right: 2rem;

    @media (max-width: 1440px) {
        right: -4rem;
    }

    @media (max-width: 1340px) {
        width: 60%;
        right: -2rem;
    }


    @media (max-width: 900px) {
        width: 110%;
        right: -30rem;
    }
}
`

export const ComputerContainer = styled(animated.div)`
    width: 100%;
    max-width: 70rem;
    display: flex;
    position: relative;
    top: .5rem;
    right: .5rem;
 
    > img {
        position: absolute;
    }

    &::after {
        display: flex;
        z-index: -1;
        content: "";
        background: linear-gradient(0deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.005) 10%, rgba(0,0,0,0.005) 90%, rgba(0,0,0,0.02) 100%);
        height: 34%;
        position: absolute;
        width: 300%;
        transform-origin: center;
        transform: translate3d(132px, 0px, 0px) rotate(45deg);
        left: -99.6%;
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
    }

    &::before {
        display: flex;
        z-index: -1;
        content: "";
        background: linear-gradient(0deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.005) 10%, rgba(0,0,0,0.005) 90%, rgba(0,0,0,0.02) 100%);
        height: 34%;
        position: absolute;
        width: 300%;
        transform-origin: center;
        transform: translate3d(132px, 0px, 0px) rotate(45deg);
        left: -100.4%;
        top: 50%;
        transform: translateY(-50%) rotate(-45deg);
    }
    
 
`


export const MaskContainer = styled.div`
    overflow: hidden; 
    position: relative;
    width: 100%; 
`


export const MaskedLaptop = styled(animated.img)`
    width: 100%;
    height: 99%;
    mask-image: url(${cross2});

    mask-position: 50% 50%;

    mask-size: contain;

    mask-repeat: no-repeat;

    mask-position: 49.5% 50.5%;
    mask-size: 157%;
    mask-repeat: no-repeat;
`

type CoinType = {
    $top?: string;
    $left?: string;
    $right?: string;
    $bottom?: string;
    $width?: string;
}

export const Coin = styled.img<CoinType>`
    position: absolute;
    z-index: 1;
    pointer-events: none;

    width: ${({ $width }) => $width ?? "12.5%"};
    ${({ $top }) => $top && css`
        top: ${$top};
    `}

    ${({ $left }) => $left && css`
        left: ${$left};
    `}

    ${({ $right }) => $right && css`
        right: ${$right};
    `}

    ${({ $bottom }) => $bottom && css`
        bottom: ${$bottom};
    `}
`