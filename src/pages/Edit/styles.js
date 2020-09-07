import styled from 'styled-components';
import { Form } from '@unform/web';

const colors = {
  primary: '#6619B1',
  secondary: '#eddaff',
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;

  h1 {
    margin-left: 10%;
  }
  svg {
    position: fixed;
    left: 2%;
    cursor: pointer;
    transition: all 100ms;

    &:hover {
      transform: scale(1.3);
    }
  }
`;

export const FormDiv = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-self: center;
  width: 101%;
  height: 100%;

  button {
    border: none;
    border-radius: 4px;
    background-color: ${colors.primary};
    color: #f2f2f2;
    font-weight: bold;

    font: 14px 'Montserrat', sans-serif;

    width: 200px;
    align-self: center;
    padding: 10px 0;
  }
`;

export const SectionArea = styled.div`
  background-color: ${props => props.tintBg && `${colors.secondary}`};
  border-radius: 8px;
  margin-bottom: 10px;
  padding: 5% 10%;
  overflow: hidden;
`;

export const Section = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    props.columns ? `repeat(${props.columns}, 1fr)` : 'repeat(1, 1fr)'};
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;
