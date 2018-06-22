import React, { Component } from 'react';
import styled from 'styled-components';
import LeftNav from '../LeftNav';

const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const FlexAuto = styled.div`
  flex: 1 1 auto;
`;

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <FlexContainer>
        <LeftNav />
        <FlexAuto>{children}</FlexAuto>
      </FlexContainer>
    );
  }
}

export default Main;
