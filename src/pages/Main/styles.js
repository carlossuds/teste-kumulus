import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { darken } from 'polished';

const colors = {
  primary: '#6619B1',
  secondary: '#eddaff',
};

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: auto;
  border-radius: 8px;
  padding: 15px;

  background-color: ${colors.secondary};
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
  color: ${colors.primary};
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
  border: 1px solid ${colors.primary};
  border-radius: 4px;
  background-color: transparent;
  font: 14px 'Montserrat', sans-serif;
  color: ${colors.primary};

  transition: all 300ms;
  &:hover {
    transform: scale(1.03);
    background-color: ${darken(0.03, `${colors.secondary}`)};
  }

  align-items: center;
  justify-content: center;
  height: 30px;
  width: 100px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  align-items: center;
  justify-content: center;
`;

export const UserList = styled.div`
  width: 90%;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 15px;

  span,
  strong {
    color: ${colors.primary};
  }
`;

export const ListItem = styled.div`
  display: flex;
  min-width: 100%;
  flex-direction: row;

  aside {
    transition: all 300ms ease-in-out;
    position: relative;
    left: -35px;
  }

  &:hover aside {
    position: relative;
    transform: translateX(35px);
  }
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 15px;
  align-items: center;

  width: 100%;

  z-index: 5;

  background-color: ${props =>
    props.index % 2 === 0 ? colors.secondary : 'white'};

  > span,
  strong {
    width: 100%;
    color: ${colors.primary};

    span {
      font-size: 10px;
    }

    &:last-child {
      div {
        visibility: hidden;
      }
    }

    &:last-child:hover {
      div {
        visibility: visible;
        display: flex;
        /*position:relative;
        bottom:25%;
        left:  90%;*/
      }
    }
  }

  a {
    text-decoration: none;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;

  border: none;
  background-color: rgb(246, 70, 69);
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;

  svg {
    transition: all 1s;
  }
  &:hover svg {
    transform: scale(1.3);
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5% 0 2% 0;
  width: 30%;

  svg {
    position: relative;
    left: 35px;
  }

  input {
    border: 1px solid ${colors.primary};
    width: 100%;
    padding-left: 50px;
    border: none;
    border-radius: 4px;
    height: 40px;

    font: 14px 'Montserrat', sans-serif;
    font-weight: 500;
    color: ${colors.primary};

    &::placeholder {
      font: 14px 'Montserrat', sans-serif;
      color: ${colors.primary};
    }
  }
`;

export const Pagination = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-self: center;
`;

export const Button = styled.button`
  margin-right: 5px;
  height: 20px;
  width: 20px;
  border-radius: 10px;
  border: 1px solid ${colors.primary};
  background-color: ${props =>
    props.selected ? colors.primary : colors.secondary};
  font: 14px 'Montserrat', sans-serif;
  color: ${props => (!props.selected ? colors.primary : colors.secondary)};
  align-items: center;
  justify-content: center;
`;
