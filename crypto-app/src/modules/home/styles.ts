import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.mainBackground};
`;

export const HomeTitle = styled.h1`
  font-size: ${(props) => props.theme.fontSize.giga};
  color: ${(props) => props.theme.colors.textPrimary};
  padding: 20px 0 0 0;
  width: 70%;
`;
