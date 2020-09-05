import React, { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';

import { StyledModal, Container, ButtonsDiv, Yes, No } from './styles';

export default function Modal({ open, setOpenModal, userId }) {
  return (
    <ModalProvider>
      <StyledModal
        isOpen={open}
        onBackgroundClick={() => setOpenModal(false)}
        onEscapeKeydown={() => setOpenModal(false)}
      >
        <Container>
          <span>
            Quer realmente <strong>excluir</strong> este usuário?
          </span>
          <ButtonsDiv>
            <Yes>EXCLUIR</Yes>
            <No onClick={() => setOpenModal(false)}>Cancelar</No>
          </ButtonsDiv>
        </Container>
      </StyledModal>
    </ModalProvider>
  );
}
