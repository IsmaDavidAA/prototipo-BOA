import styled from "@emotion/styled";
import { Box } from "@mui/material";
export const ContainerRegisterCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 768px) {
  }
`;

export const ContainerCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 0 20px;
`;

export const InputContainer = styled.div`
  padding: 20px;
`;

export const ContainerRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 100%;
`;
