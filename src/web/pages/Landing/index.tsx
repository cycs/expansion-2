import { FC } from "react";
import { Layout } from "../../components/Layout";
import { Header } from "../../components/Header";
import { ContentHero } from "../../components/ContentHero";
import btg from "../../../assets/EXP-22-27988-hp-v6.png";

export const LandingPage: FC = () => {
  return (
    <Layout>
      <>
        {/* <img
          src={btg}
          style={{
            position: "absolute",
            width: "1440px",
            opacity: 0.2,
            left: "0",
            top: "0",
          }}
        /> */}
        <Header />
        <div
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            display: "flex",
            height: "100%",
            flexDirection: "column",
          }}
        >
          <ContentHero />
        </div>
      </>
    </Layout>
  );
};
