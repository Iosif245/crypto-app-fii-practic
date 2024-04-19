import React, { useState, useRef } from "react";
import { ModalButtonsContainer, ModalCancelButton, ModalConfirmButton, ModalContainer, ModalContent, ModalInput, ModalInputsContainer, ModalLabel, ModalTitle } from "./styles";
import { useAppDispatch } from "../../hooks/store-hooks";
import { createCoinAsyncAction } from "../../store/actions/coin-actions";
import { setAppIsModalOpenAction } from "../../store/actions/app-sync-actions";
import useClickOutside from "../../hooks/useClickOutside";

const Modal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [count, setCount] = useState<string>("");

  const handleSubmit = () => {
    const newCoin: INewCoin = {
      name,
      price: Number(price),
      count: Number(count),
    };
    dispatch(createCoinAsyncAction(newCoin));
    dispatch(setAppIsModalOpenAction(false));
  };

  const handleCancel = () => {
    dispatch(setAppIsModalOpenAction(false));
  };

  useClickOutside(ref, () => handleCancel());

  return (
    <ModalContainer>
      <ModalContent ref={ref}>
        <ModalTitle>Add new coin</ModalTitle>
        <ModalInputsContainer>
          <ModalLabel>Name</ModalLabel>
          <ModalInput type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <ModalLabel>Price</ModalLabel>
          <ModalInput type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
          <ModalLabel>Count</ModalLabel>
          <ModalInput type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        </ModalInputsContainer>
        <ModalButtonsContainer>
          <ModalCancelButton onClick={() => handleCancel()}>Cancel</ModalCancelButton>
          <ModalConfirmButton onClick={() => handleSubmit()}>Confirm</ModalConfirmButton>
        </ModalButtonsContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
