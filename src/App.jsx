import React, { Component } from 'react';
import styled from 'styled-components';

/** Containers */
import Calculator from 'src/containers/Calculator';
import Header from 'src/containers/Header';

/** Components */
import Autosized from 'src/components/Autosized';
import { Container, Row, Col } from 'src/components/Grid';

const Viewport = styled.div`
  width: 100vw;
  height: 100vh;
`;

class App extends Component {
  render() {
    return (
      <Viewport id="viewport">
        <Container>
          <Row height="auto">
            <Col>
              <Header />
            </Col>
          </Row>
          <Row>
            <Col>
              <Autosized>
                <Calculator />
              </Autosized>
            </Col>
          </Row>
        </Container>
      </Viewport>
    );
  }
}

export default App;
