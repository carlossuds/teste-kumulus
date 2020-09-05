import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { darken } from 'polished';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: auto;
  border-radius: 8px;
  padding: 15px;

  background-color: #eddaff;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  height: 40%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Yes = styled.button`
  border: none;
  border-radius: 4px;
  background-color: rgb(246, 70, 69);

  font: 14px 'Montserrat', sans-serif;
  color: #eddaff;
  font-weight: bold;

  align-items: center;
  justify-content: center;
  height: 30px;
  width: 200px;

  transition: all 300ms;
  &:hover {
    transform: scale(1.1);
    background-color: ${darken(0.1, 'rgb(246, 70, 69)')};
  }
`;

export const No = styled.button`
  border: 1px solid #6619b1;
  border-radius: 4px;
  background-color: transparent;
  font: 14px 'Montserrat', sans-serif;
  color: #6619b1;

  transition: all 300ms;
  &:hover {
    transform: scale(1.03);
    background-color: ${darken(0.03, '#eddaff')};
  }

  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
`;
