import React, { Component } from 'react';
import styled from 'styled-components';
import LeftNav from '../LeftNav';
import TopBar from '../../components/TopBar';

const FlexContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

const FlexAuto = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const ContentWrap = styled.div`
  flex: 1;
  overflow-y: auto;
`;

class Main extends Component {
  render() {
    const { children } = this.props;
    return (
      <FlexContainer>
        <LeftNav />
        <FlexAuto>
          <TopBar title={'Proger'} />
          <ContentWrap>{children}</ContentWrap>
        </FlexAuto>
      </FlexContainer>
    );
  }
}

export default Main;
