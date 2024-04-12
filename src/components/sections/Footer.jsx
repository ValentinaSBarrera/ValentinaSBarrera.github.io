import React from "react";
import styled from "styled-components";
import { BioSpanish, BioEnglish } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub"

const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

const FooterWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;
const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

const Footer = ({ language }) => {
  const BioData = language === "en" ? BioSpanish : BioEnglish;

  const aboutText = language === "es" ? "Sobre Mi" : "About Me";
  const skillsText = language === "es" ? "Habilidades" : "Skills";
  const experienceText = language === "es" ? "Experiencia" : "Experience";
  const projectsText = language === "es" ? "Proyectos" : "Projects";
  const educationText = language === "es" ? "Educación" : "Education";

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>{BioData.name}</Logo>
        <Nav>
          <NavLink href="#About">{aboutText}</NavLink>
          <NavLink href="#Skills">{skillsText}</NavLink>
          <NavLink href="#Experience">{experienceText}</NavLink>
          
          <NavLink href="#Education">{educationText}</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={BioData.insta} target="_Blank">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={BioData.linkedin} target="_Blank">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={BioData.github} target="_Blank">
            <GitHubIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>&copy; 2024 {BioData.name}. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
//<NavLink href="#Projects">{projectsText}</NavLink>