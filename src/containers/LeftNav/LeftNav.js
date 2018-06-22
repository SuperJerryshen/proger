import React, { Component } from 'react';
import styled from 'styled-components';
import { Settings, Home } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import { Link } from '@reach/router';

import ipc from '../../libs/ipc';

const styledIcon = (Comp, { title, enterDelay = 1000 }) => {
  const StyledComp = styled(Comp)`
    && {
      color: rgb(215, 218, 224);
      height: 50px;
      cursor: pointer;
      &:hover {
        color: rgb(255, 255, 255);
      }
    }
  `;
  return props => (
    <Tooltip enterDelay={enterDelay} title={title} placement="right">
      <StyledComp {...props} />
    </Tooltip>
  );
};

class LeftNav extends Component {
  openSettingMenu = () => {
    ipc.send('open-setting-menu');
  };

  render() {
    const FlexContainer = styled.div`
      flex: 0 0 50px;
      background: #333;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;
    const StyleFlexDiv = styled.div`
      text-align: center;
      width: 50px;
    `;
    const StyledSettings = styledIcon(Settings, { title: '设置' });
    const StyledHome = styledIcon(Home, { title: '主页' });

    return (
      <FlexContainer>
        <StyleFlexDiv>
          <Link to="/">
            <StyledHome />
          </Link>
        </StyleFlexDiv>
        <StyleFlexDiv>
          <StyledSettings onClick={this.openSettingMenu} />
        </StyleFlexDiv>
      </FlexContainer>
    );
  }
}

export default LeftNav;
