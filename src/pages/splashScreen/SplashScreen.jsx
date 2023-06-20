import React from "react";
import { ContainerSplash } from "./StyleSplashScreen";
import Logo from "../../asset/Logo.png"

const SplashScreen = () => {
  return (
    <ContainerSplash>
      <figure>
        <img src={Logo} alt="Logo" />
      </figure>
    </ContainerSplash>
  );
};

export default SplashScreen;
