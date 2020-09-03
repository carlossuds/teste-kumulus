import styled from 'styled-components';

const colors = {
  primary: '#6619B1',
  secondary: '#eddaff',
};

export const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-content: center;
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

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const User = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${props =>
    props.index % 2 === 0 ? colors.secondary : null};
  padding: 10px 15px;
  align-items: center;

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
  position: relative;
  border: none;
  background-color: #dc143c;
  bottom: 50%;
  left: 100%;
`;
