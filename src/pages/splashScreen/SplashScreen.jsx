import React from "react";
import { ContainerSplash } from "./StyleSplashScreen";
import Logo from "../../asset/Logo.png"
import { useNavigate } from "react-router-dom";

const SplashScreen = () => {
  const navigate = useNavigate()

  const onClikSlide = () => {
    navigate("/slide");
  };
  return (
    <ContainerSplash>
      <figure onClick={onClikSlide}>
        <img src={Logo} alt="Logo" />
      </figure>
    </ContainerSplash>
  );
};

export default SplashScreen;
