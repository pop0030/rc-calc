import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  width: 100%;
  background: #4286f4;
  padding: 12px 24px;
  > h1 {
    color: #fff;
    font-weight: bold;
  }
`;

const Header = () => (
  <StyledHeader>
    <h1>RC Calulator</h1>
  </StyledHeader>
);

export default Header;
