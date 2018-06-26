import React, { Component } from 'react';
import styled from 'styled-components';
import { Settings, Home, ChildCare } from '@material-ui/icons';
// import { Tooltip } from '@material-ui/core';
import { Link } from 'react-router-dom';

import ipc from '../../libs/ipc';

/**
 * 格式化图标组件
 * @param {*} Comp
 * @param {*} param1
 */
const styledIcon = (Comp, { title, enterDelay = 1000 }) => {
  const CompWrap = styled.div`
    && {
      color: rgb(215, 218, 224);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      &:hover {
        color: rgb(255, 255, 255);
      }
    }
  `;
  return props => (
    <CompWrap title={title}>
      <Comp {...props} style={{ fontSize: 32 }} />
    </CompWrap>
  );
};

class LeftNav extends Component {
  openSettingMenu = () => {
    ipc.send('open-setting-menu');
  };

  render() {
    const FlexContainer = styled.div`
      flex: 0 0 78px;
      background: #333;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `;
    const StyleFlexDiv = styled.div`
      width: 78px;
      display: flex;
      flex-direction: column;
    `;
    const StyledSettings = styledIcon(Settings, { title: '设置' });
    const StyledHome = styledIcon(Home, { title: '主页' });
    const StyledChildCare = styledIcon(ChildCare, { title: '欢迎页' });

    return (
      <FlexContainer>
        <StyleFlexDiv>
          <div style={{ width: '100%', height: 36 }} />
          <Link to="/">
            <StyledHome />
          </Link>
          <Link to="/hello">
            <StyledChildCare />
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
