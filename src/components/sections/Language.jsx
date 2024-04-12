import React from "react";
import styled from "styled-components";
import esFlag from "./flags/flag-es.png";
import enFlag from "./flags/flag-en.png";

const FlagButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const Flag = styled.img`
  width: 30px; /* Ajusta el tamaño según sea necesario */
  height: auto;
  margin-left:15px;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  
`;

const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <div>
      <FlagButton onClick={() => onSelectLanguage("es")}>
        <Flag src={esFlag} alt="Spanish Flag" />
      </FlagButton>
      <FlagButton onClick={() => onSelectLanguage("en")}>
        <Flag src={enFlag} alt="English Flag" />
      </FlagButton>
    </div>
  );
};

export default LanguageSelector;
