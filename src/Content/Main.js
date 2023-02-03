import React from "react";
import { Banner } from "./Banner";
import CtaButton from "./Button";
import CardContainer from "./CardContainer";
import Header from "./Header";
import { HeroTeaser } from "./HeroTeaser";

const Main = () => {
  return (
    <div>
      <Header />
      <HeroTeaser />
      <Banner title="This Week's Specials!" cta="Online Menu"/>
      <CardContainer/>
    </div>
  );
};

export default Main;
