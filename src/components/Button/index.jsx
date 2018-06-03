import React from 'react';
import styled from 'styled-components';

const StyleButton = styled.div`
  display: inline-flex;
  background-color: #fefefe;
  border-width: 0 1px 1px 0;
  border-style: solid;
  border-color: #aaa;
  cursor: pointer;
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: #eee;
  }
`;

const Button = ({ ...props }) => (
  <StyleButton
    role="button"
    {...props}
  />
);

export default Button;
