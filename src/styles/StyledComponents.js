import styled from "@emotion/styled";
import { Box } from "@mui/material";
export const ContainerRegisterCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  padding: 20px;

  @media (max-width: 768px) {
  }
`;

export const ContainerCard = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

export const ContainerJoin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 100%;
`;

export const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  padding: 10px;
  background-color: #d8d8d8;
`;

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  margin: 0 auto;
  width: 100%;
  padding: 10px;
`;

export const ContainerOption = styled.button`
  display: flex;
  color: #253a57;
  background-color: #d8d8d8;
  padding: 10px;
  border: none;
  size: 1.8rem;
  font-weight: bold;
`;
