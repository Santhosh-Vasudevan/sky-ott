import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import styled from "styled-components";

interface LayoutProps {
  children: React.ReactNode;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const BodyContent = styled.main`
  flex: 1;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <BodyContent>{children}</BodyContent>
      <Footer />
    </PageContainer>
  );
};

export default Layout;