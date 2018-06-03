import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: ${({ height }) => {
    if (height === 'auto') {
      return '0 0 auto';
    }
    if (height) {
      return `0 0 ${height}px`
    }
    return '1 1 100%'
  }}
`;

const StyledCol = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: ${({ width }) => width === 'atuo' ? 1 : 0};
  flex-shrink: ${({ width }) => width === 'auto' ? 1 : 0};
  flex-basis: ${({ width }) => width ? width : 'auto'};
`;

export const Container = ({ ...restProps }) => {
  return (
    <StyledContainer {...restProps} />
  );
};

export const Row = ({ ...restProps }) => {
  return (
    <StyledRow {...restProps} />
  );
};

export const Col = ({ ...restProps }) => {
  return (
    <StyledCol {...restProps}/>
  );
}

