import { FC, useEffect, useMemo, useRef } from "react";
import { animated, useSpring, useSprings } from "@react-spring/web";
import {
  ComputerContainer,
  ComputerParentContainer,
  MaskContainer,
  MaskedLaptop,
} from "./styles";
import laptop from "../../../assets/laptop-structure.png";
import laptopColor from "../../../assets/computerColor.png";
import wireframe from "../../../assets/Wireframe.png";
import rocket from "../../../assets/Rocket.png";
import euroCoin1 from "../../../assets/coins/ico-euro.png";
import euroCoin2 from "../../../assets/coins/ico-euro-2.png";
import euroCoin3 from "../../../assets/coins/ico-euro-3.png";
import euroCoin4 from "../../../assets/coins/ico-euro-4.png";
import thumbCoin1 from "../../../assets/coins/ico-thumb-1.png";
import thumbCoin2 from "../../../assets/coins/ico-thumb-2.png";
import thumbCoin3 from "../../../assets/coins/ico-thumb-3.png";
import thumbCoin4 from "../../../assets/coins/ico-thumb-4.png";
import thumbCoin5 from "../../../assets/coins/ico-thumb-5.png";
import heartCoin1 from "../../../assets/coins/ico-heart-1.png";
import heartCoin2 from "../../../assets/coins/ico-heart-2.png";
import heartCoin3 from "../../../assets/coins/ico-heart-3.png";
import heartCoin4 from "../../../assets/coins/ico-heart-4.png";
import heartCoin5 from "../../../assets/coins/ico-heart-5.png";
import heartCoin6 from "../../../assets/coins/ico-heart-6.png";
import heartCoin7 from "../../../assets/coins/ico-heart-7.png";
import arobasCoin1 from "../../../assets/coins/ico-arobas-1.png";
import arobasCoin2 from "../../../assets/coins/ico-arobas-2.png";
import arobasCoin3 from "../../../assets/coins/ico-arobas-3.png";
import arobasCoin4 from "../../../assets/coins/ico-arobas-4.png";
import ecommerceCoin1 from "../../../assets/coins/ico-ecommerce-1.png";
import ecommerceCoin2 from "../../../assets/coins/ico-ecommerce-2.png";
import ecommerceCoin3 from "../../../assets/coins/ico-ecommerce-3.png";
import ecommerceCoin4 from "../../../assets/coins/ico-ecommerce-4.png";
import croissanceCoin1 from "../../../assets/coins/ico-croissance-1.png";
import croissanceCoin2 from "../../../assets/coins/ico-croissance-2.png";
import croissanceCoin3 from "../../../assets/coins/ico-croissance-3.png";
import croissanceCoin4 from "../../../assets/coins/ico-croissance-4.png";
import arrowCoin1 from "../../../assets/coins/ico-arrow-1.png";
import arrowCoin2 from "../../../assets/coins/ico-arrow-2.png";
import arrowCoin3 from "../../../assets/coins/ico-arrow-3.png";
import arrowCoin4 from "../../../assets/coins/ico-arrow-4.png";
import statsCoin1 from "../../../assets/coins/ico-stats-1.png";
import statsCoin2 from "../../../assets/coins/ico-stats-2.png";
import statsCoin3 from "../../../assets/coins/ico-stats-3.png";
import starCoin1 from "../../../assets/coins/ico-star-1.png";
import starCoin2 from "../../../assets/coins/ico-star-2.png";
import starCoin3 from "../../../assets/coins/ico-star-3.png";
import { throttle } from "lodash";
import { getCoinAnimation, getRocketAnimation } from "./helpers";

export const Computer: FC = () => {
  const coins = useMemo(
    () => [
      { src: euroCoin1, top: "-23%", left: "0.7%" },
      { src: euroCoin2, top: "61%", left: "33.5%" },
      { src: euroCoin3, width: "14.5%", right: "6%", bottom: "-41%" },
      { src: euroCoin4, width: "14.5%", top: "-38%", right: "0%" },
      { src: thumbCoin1, width: "14.5%", top: "-21%", right: "5%" },
      { src: thumbCoin2, width: "14.5%", top: "39%", left: "30%" },
      { src: thumbCoin3, width: "14.5%", right: "9.6%", bottom: "-22.9%" },
      { src: thumbCoin4, width: "14.5%", left: "4%", bottom: "-28%" },
      { src: thumbCoin5, top: "40%", right: "32%" },
      { src: arobasCoin1, right: "11.3%", bottom: "-3.4%" },
      { src: arobasCoin2, top: "23%", left: "27.2%" },
      { src: arobasCoin3, width: "11.5%", left: "26.1%", bottom: "7%" },
      { src: arobasCoin4, right: "35.2%", top: "26.4%" },
      { src: heartCoin1, top: "-17.5%", right: "16.1%" },
      { src: heartCoin2, right: "23.3%", bottom: "59.9%" },
      { src: heartCoin3, width: "11.5%", left: "18.6%", bottom: "2.3%" },
      { src: heartCoin4, width: "13.5%", right: "28.7%", bottom: "16.2%" },
      { src: heartCoin5, bottom: "-26.2%", right: "1.5%" },
      { src: heartCoin6, width: "11.5%", left: "37.5%", bottom: "51%" },
      { src: heartCoin7, top: "-2.8%", left: "29.6%" },
      { src: statsCoin1, width: "11.5%", top: "29.5%", right: "28.8%" },
      { src: statsCoin2, left: "26.5%", bottom: "-8.5%" },
      { src: statsCoin3, top: "14.7%", left: "33.2%" },
      { src: ecommerceCoin1, top: "-23.5%", left: "13.9%" },
      { src: ecommerceCoin2, left: "7.7%", bottom: "-12.3%" },
      { src: ecommerceCoin3, width: "11.5%", top: "-0.4%", right: "10.1%" },
      { src: ecommerceCoin4, width: "11.5%", right: "21.5%", bottom: "-15%" },
      { src: croissanceCoin1, width: "11.5%", top: "-8.9%", left: "21.1%" },
      { src: croissanceCoin2, left: "18.9%", bottom: "-17.8%" },
      { src: croissanceCoin3, width: "11.5%", top: "13.3%", right: "35.2%" },
      { src: croissanceCoin4, width: "14.5%", right: "18.2%", bottom: "3.9%" },
      { src: arrowCoin1, width: "13.5%", right: "34.6%", bottom: "5.9%" },
      { src: arrowCoin2, width: "13.5%", left: "22.3%", bottom: "19.4%" },
      { src: arrowCoin3, width: "14.5%", top: "-6.7%", left: "11.3%" },
      { src: arrowCoin4, top: "-2.4%", right: "19.1%" },
      { src: starCoin1, top: "8.4%", left: "19.8%" },
      { src: starCoin2, top: "3.3%", right: "27.6%" },
      { src: starCoin3, width: "13%", right: "27.7%", bottom: "-3.7%" },
    ],
    []
  );
  const animationFrameRef = useRef<number | null>(null);
  const animationRocketFrameRef = useRef<number | null>(null);

  const [springs, api] = useSprings(coins.length, (index) => ({
    left: coins[index].left || undefined,
    top: coins[index].top || undefined,
    right: coins[index].right || undefined,
    bottom: coins[index].bottom || undefined,
    config: { mass: 1, tension: 170, friction: 26 },
  }));

  const handleMouseMove = throttle((e: MouseEvent) => {
    if (animationFrameRef.current !== null) return;

    animationFrameRef.current = requestAnimationFrame(() => {
      api.start((index) =>
        getCoinAnimation({ coin: coins[index], e, animationFrameRef })
      );
    });
  });

  const [style, animate] = useSpring(() => ({
    maskSize: "157%",
    transform: "translate(-50%, -47%)",
    config: { tension: 120, friction: 14 },
  }));

  const containerRef = useRef<HTMLDivElement>(null);

  const handleCrossAnimation = throttle((e: MouseEvent) => {
    animate.start(() => {
      const rect = containerRef?.current?.getBoundingClientRect();

      return getRocketAnimation({
        e,
        rect,
        animationFrameRef: animationRocketFrameRef,
      });
    });
  });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousemove", handleCrossAnimation);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousemove", handleCrossAnimation);
    };
  }, [handleCrossAnimation, handleMouseMove]);

  return (
    <ComputerParentContainer className="computer">
      <ComputerContainer ref={containerRef}>
        <img src={laptop} style={{ aspectRatio: "1.75 / 1" }} width="100%" />
        <animated.img
          src={rocket}
          style={{
            top: "50%",
            left: "50.6%",
            transform: style.transform,
            zIndex: 1,
          }}
        />

        {springs.map((props, index) => (
          <animated.img
            key={index}
            src={coins[index].src}
            style={{
              ...props,
              zIndex: 1,
              position: "absolute",
              width: coins[index].width || "12.5%",
            }}
          />
        ))}

        <img
          src={wireframe}
          style={{ width: "75.65%", left: "12.2%", top: "6.5%" }}
          width="100%"
        />
        <MaskContainer>
          <MaskedLaptop
            src={laptopColor}
            style={{ maskSize: style.maskSize }}
          />
        </MaskContainer>
      </ComputerContainer>
    </ComputerParentContainer>
  );
};
