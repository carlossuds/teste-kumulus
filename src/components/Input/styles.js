import styled from 'styled-components';
import { lighten } from 'polished';

const colors = {
  primary: '#6619B1',
  secondary: '#eddaff',
  red: '#F64645',
};

export const Error = styled.div`
  position: absolute;
  background-color: ${props =>
    props.error
      ? lighten(0.2, `${colors.red}`)
      : props.tintBg
      ? `#f2f2f2`
      : `${colors.secondary}`};

  color: ${colors.red};
  font-weight: 700;
  padding: 2px;
  border-radius: 4px;
`;

export const MyInput = styled.input`
  margin: 8px 0;
  border: ${props => (props.error ? `2px solid ${colors.red}` : 'none')};
  background-color: ${props =>
    props.error
      ? lighten(0.2, `${colors.red}`)
      : props.tintBg
      ? `#f2f2f2`
      : `${colors.secondary}`};

  width: 90%;
  height: 20px;
  padding: 10px;
  border-radius: 4px;
  color: ${colors.primary};
  font: 14px 'Montserrat', sans-serif;
  font-weight: 500;

  transition: 0.5s;

  ::placeholder {
    color: ${colors.primary};
    font-weight: 700;
  }
`;
