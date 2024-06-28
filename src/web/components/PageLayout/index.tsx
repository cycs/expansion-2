import { FC } from "react";
import "./styles.css";
import hexagon from "../../../assets/Vector.svg";
type PageLayout = {
  children: React.ReactNode;
};

export const PageLayout: FC<PageLayout> = ({ children }) => (
  <div className="main-layout container mx-auto">
    <img src={hexagon} />
    {/* <div className="grid grid-cols-12 gap-4">{children}</div> */}
    <div className="grid grid-cols-12 gap-8">{children}</div>
  </div>
);
