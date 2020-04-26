import React from 'react';
import Colors from '../constants/Colors';
import styled from 'styled-components';

const SelectionContainer = styled.select`
  cursor: pointer;
  width: 12rem;
  height: 38px;
  background-color: ${Colors.white};
  margin-right: 1rem;
`;

const Selection = ({ options, value, label, onChange }) => {
  return (
    <SelectionContainer value={value} onChange={onChange}>
      <option value="">{label}</option>
      {options &&
        options.map((data, index) => (
          <option key={index} value={data}>
            {data}
          </option>
        ))}
    </SelectionContainer>
  );
};

export default Selection;
