import styled from 'styled-components';
import Colors from '../constants/Colors';

const Button = styled.button`
  background: ${(props) => (props.primary ? Colors.primary : Colors.white)};
  color: ${(props) => (props.primary ? Colors.white : Colors.primary)};
  padding: 6px 12px;
  border-radius: 4px;
  margin-bottom: 1rem;
`;

export default Button;
