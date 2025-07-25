import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
`;

const Spinner = styled.div`
  border-top: 4px solid #0070f3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`;

const Text = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
`;

const Loader: React.FC = () => {
  return (
    <LoaderContainer>
      <Spinner />
      <Text>Loading...</Text>
    </LoaderContainer>
  );
};

export default Loader;