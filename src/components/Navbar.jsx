import React, { useState } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { BioEnglish } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";
import LanguageSelector from "./sections/Language";

const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
`;

// Aquí puedes definir los estilos para los textos de color
const ColorText = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 32px;
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

// Aquí cambiamos el nombre del componente del logo según el idioma
const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  width: 80%;
  padding: 0 6px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: none;
  color: inherit;
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 80px; /* Cambiar el ancho a tu preferencia */
  text-align: center; /* Alinea el texto al centro */
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GithubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.6s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centra horizontalmente los elementos */
  justify-content: center; /* Centra verticalmente los elementos */
  gap: 16px;
  padding: 0 6px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.card_light + 99};
  position: absolute;
  top: 80px;
  right: 0;

  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;


const Navbar = ({ onSelectLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    onSelectLanguage(selectedLanguage); // Llama a la función onSelectLanguage pasada como prop
  };

  // Aquí definimos los nombres de los componentes según el idioma seleccionado
  const aboutText = language === "es" ? "Sobre Mi" : "About Me";
  const skillsText = language === "es" ? "Habilidades" : "Skills";
  const experienceText = language === "es" ? "Experiencia" : "Experience";
  const projectsText = language === "es" ? "Proyectos" : "Projects";
  const educationText = language === "es" ? "Educación" : "Education";

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <ColorText>&lt;</ColorText>Valentina
          <div style={{ color: theme.primary }}>/</div>S.Barrera
          <ColorText>&gt;</ColorText>
        </NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded style={{ color: "inherit" }} />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">{aboutText}</NavLink>
          <NavLink href="#Skills">{skillsText}</NavLink>
          <NavLink href="#Experience">{experienceText}</NavLink>
          
          <NavLink href="#Education">{educationText}</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#About">
              {aboutText}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Skills">
              {skillsText}
            </NavLink>
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Experience">
              {experienceText}
            </NavLink>
            
            <NavLink onClick={() => setIsOpen(!isOpen)} href="#Education">
              {educationText}
            </NavLink>
            <GithubButton
              href={BioEnglish.github}
              target="_Blank"
              style={{
                background: theme.primary,
                color: theme.text_primary,
              }}
            >
              Github Profile
            </GithubButton>
            <LanguageSelector onSelectLanguage={handleLanguageChange} />
          </MobileMenu>
        )}

        <ButtonContainer>
          <GithubButton href={BioEnglish.github} target="_Blank">
            Github Profile
          </GithubButton>
          <LanguageSelector onSelectLanguage={handleLanguageChange} />
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
/*<NavLink onClick={() => setIsOpen(!isOpen)} href="#Projects">
              {projectsText}
            </NavLink> Mobile Menu*/
           // <NavLink href="#Projects">{projectsText}</NavLink> Normal Menu

