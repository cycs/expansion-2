import { FC } from "react";
import { StyledLayout } from "./styles";

type LayoutType = {
  children: JSX.Element;
};

export const Layout: FC<LayoutType> = ({ children }) => (
  <StyledLayout className="layout">{children}</StyledLayout>
);
