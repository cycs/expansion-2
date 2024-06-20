import { FC } from "react";
import { PageLayoutContainer } from "./styles";

type PageLayout = {
  children: React.ReactNode;
};

export const PageLayout: FC<PageLayout> = ({ children }) => (
  <PageLayoutContainer>{children}</PageLayoutContainer>
);
