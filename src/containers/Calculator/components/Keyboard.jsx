import React from 'react';
import styled from 'styled-components';
import Button from 'src/components/Button';
import { KEYS } from '../constant';

const KeyboardContainer = styled.div`
  display: inline-flex;
  width: auto;
  flex-direction: column;
  border-width: 1px 0 0 1px;
  border-style: solid;
  border-color: #aaa;
  > div {
    flex: 0 0 auto;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
`

const renderRow = (groups = []) => {
  return groups.map((group, index) => (
    <ButtonsRow key={`row:${index}`}>
      {renderButtons(group)}
    </ButtonsRow>
  ));
}

const renderButtons = (value = []) => {
  return value.map((num, index) => (
    <Button
      key={`${num}:${index}`}
      onClick={(evt) => {
        console.log(num);
      }}
    >
      {num}
    </Button>
  ));
};

const Keyboard = () => (
  <KeyboardContainer>
    {renderRow(KEYS)}
  </KeyboardContainer>
);

export default Keyboard;
