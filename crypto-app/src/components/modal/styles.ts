import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme.colors.popupBackground};
  box-shadow: 0px 0px 10px 0px #000000;
  width: 450px;
  height: 450px;
  border-radius: 20px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const ModalCancelButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.errorRed};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalConfirmButton = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.acceptGreen};
  font-size: ${(props) => props.theme.fontSize.sm};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  align-self: flex-end;
  justify-self: center;
`;

export const ModalInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.textPrimary};
  background-color: ${(props) => props.theme.colors.popupBackground};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const ModalLabel = styled.label`
  font-size: ${(props) => props.theme.fontSize.xl};
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const ModalTitle = styled.h2`
  font-size: ${(props) => props.theme.fontSize.giga};
  color: ${(props) => props.theme.colors.textPrimary};
`;
