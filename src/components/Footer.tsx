import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #eaeaea;
  color: #333;
  text-align: center;
  font-size: 0.9rem;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} Sky View. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;