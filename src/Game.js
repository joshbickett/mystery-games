import styled from "@emotion/styled";
import { Characters } from "./components/Characters";
import { Instructions } from "./components/Instructions";
import BrandLogoImage from "./images/brand-logo.png";

export const Game = ({ game, setGame }) => {
  return (
    <Container>
      <NavContainer>
        <BrandHeader src={BrandLogoImage} alt="mansion" />
      </NavContainer>
      <Instructions />
      <Characters />
    </Container>
  );
};

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const BrandHeader = styled.img`
  width: 300px;
  border-radius: 16px;
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  color: black;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Container = styled.div`
  min-height: 100vh;
  background-color: #ffffff;

  color: black;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
