import styled from 'styled-components';

const colors = {
  primary: '#6619B1',
  secondary: '#eddaff',
  red: '#F64645',
};

export const Container = styled.div`
  display: flex;
  position: relative;
  left: -10px;
  bottom: -10px;
  padding: 5px 0;
  width: 101.2%;
  height: 200px;
  background-color: #6619b1;
  margin-top: 10px;

  > a {
    margin: 100px 5%;
  }

  span {
    font: 14px 'Montserrat', sans-serif;
    color: #f2f2f2;
  }
  strong {
    font: 14px 'Montserrat', sans-serif;
    color: #f2f2f2;
    font-weight: bold;
  }
`;

export const Column = styled.div`
  height: calc(100%-20px);
  width: 100%;
  margin: 20px;
  padding-right: 20px;
  align-items: baseline;
  justify-content: space-between;

  div {
    display: flex;
    margin-top: 20px;
    flex-direction: column;
  }

  span {
    display: flex;
    align-items: center;
    margin-top: 10px;

    svg {
      margin-right: 5px;
    }
  }

  a {
    text-decoration: none;
    margin-top: 10px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
