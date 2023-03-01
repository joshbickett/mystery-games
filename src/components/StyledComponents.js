import styled from "@emotion/styled";

export const SplitContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const SplitLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  padding: 25px 75px;
  color: white;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

export const SplitRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 75px;
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 25px;
  }
`;
