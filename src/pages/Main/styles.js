import styled from 'styled-components';
import Modal from 'styled-react-modal';
import { lighten, darken } from 'polished';

const colors = {
  primary: '#6619B1',
  secondary: '#eddaff',
  red: '#F64645',
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
  height: 30%;
  width: 20%;
  border-radius: 8px;
  padding: 15px;

  background-color: ${colors.secondary};

  svg {
    position: absolute;
    right: 40%;
    top: 35%;
    cursor: pointer;
  }
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
  background-color: ${lighten(0.1, `${colors.red}`)};

  font: 14px 'Montserrat', sans-serif;
  color: #f2f2f2;

  align-items: center;
  justify-content: center;
  height: 30px;
  width: 200px;

  transition: all 300ms;
  &:hover {
    transform: scale(1.1);
    background-color: ${darken(0.1, `${colors.red}`)};
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

  > svg {
    position: absolute;
    bottom: 0;
  }
`;

export const UserList = styled.div`
  width: 90%;
  min-height: 100%;
  z-index: 2;
`;

export const ListHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 15px;
  width: calc(100% - 102px);
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
    position: relative;
    display: flex;
    flex-direction: row;
    transition: all 300ms ease-in-out;
    position: relative;
    left: -105px;
  }

  &:hover aside {
    position: relative;
    transform: translateX(105px);
  }
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 15px;
  align-items: center;
  overflow: hidden;

  width: 100%;
  height: 90px;
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
  position: relative;
  left: -5px;
  border: none;
  background-color: ${lighten(0.05, `${colors.red}`)};
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

export const EditBtn = styled.button`
  cursor: pointer;
  z-index: 3;
  border: none;
  background-color: ${colors.primary};
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  height: 100%;
  width: 35px;

  svg {
    transition: all 1s;
    height: 100%;
    width: 100%;
  }
  &:hover svg {
    transform: scale(1.3);
  }
`;

export const FilterDiv = styled.div`
  z-index: 5;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: center;
  width: 30%;
  margin-bottom: 4%;
  svg {
    position: relative;
    left: 35px;
    background-color: ${colors.secondary};
    padding: 8.5px;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
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
  z-index: 2;
`;

export const PageButton = styled.button`
  cursor: pointer;
  margin-right: 5px;
  height: 20px;
  width: 20px;
  border-radius: 4px;
  border: none;
  background-color: ${props =>
    props.selected ? colors.primary : colors.secondary};
  font: 14px 'Montserrat', sans-serif;
  color: ${props => (!props.selected ? colors.primary : colors.secondary)};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const AddBtn = styled.button`
  position: absolute;
  right: 10%;
  border: none;
  background-color: ${colors.primary};
  width: 200px;
  height: 40px;
  border-radius: 4px;

  a {
    text-decoration: none;
    color: #f2f2f2;
    font: 14px 'Montserrat', sans-serif;
  }
`;
