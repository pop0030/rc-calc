import React from 'react';
import styled from 'styled-components';

const OutputArea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  height: 48px;
  margin-bottom: 4px;
`

const Monitor = ({ output, ...props }) => {
  return (
    <div {...props}>
      <OutputArea>{output}</OutputArea>
    </div>
  );
};

export default Monitor;
