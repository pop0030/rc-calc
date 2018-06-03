import React from 'react';
import styled from 'styled-components';
import Keyboard from './components/Keyboard';
import Monitor from './components/Monitor';

const StyledContainer = styled.div`
  border: 1px solid #aaa;
  display: block;
  position: absolute;
  left: ${({ parentWidth }) => parentWidth / 2}px;
  top: 200px;
  transform: translate(-50%, -50%);
  padding: 4px;
`;

const Calculator = ({ parentWidth, parentHeight }) => (
  <StyledContainer
    parentWidth={parentWidth}
    parentHeight={parentHeight}
  >
    <Monitor />
    <Keyboard />
  </StyledContainer>
);

export default Calculator;
