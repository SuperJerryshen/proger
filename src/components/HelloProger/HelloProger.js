// 此组件仅用做测试
import React, { Component } from 'react';
import { Link } from '@reach/router';
import { Button } from '@material-ui/core';
import { Face } from '@material-ui/icons';
import styled from 'styled-components';
import ipc from '../../libs/ipc';

import logo from '../../assets/logo.svg';
import './HelloProger.css';

const StyledButton = styled(Button)`
  && {
    background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
    border-radius: 3px;
    border: 0;
    color: #ffffff;
    height: 48px;
    padding: 0 30px;
    box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
    margin-right: 12px;
  }
`;

const StyledFace = styled(({ color, ...other }) => <Face {...other} />)`
  color: ${props => props.color};
`;

class HelloProger extends Component {
  handleIpcSend = () => {
    ipc.once('get-times-response', (e, obj) => {
      console.log(obj);
    });
    ipc.send('get-times', '我在向主线程请求现在的时间');
  };

  openNewWindow = () => {
    ipc.send('create-web-window', {
      url: 'http://mall.qa.medlinker.com',
    });
  };

  render() {
    const { count, addCount, asyncAddCount } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Proger</h1>
        </header>
        <p className="App-intro">现在的数量：{count}</p>
        <Button onClick={() => addCount(1)}>
          <Face /> + 1
        </Button>
        <StyledButton onClick={() => asyncAddCount(1)}>
          <StyledFace color="#fff" /> 异步 + 1
        </StyledButton>
        <div style={{ marginTop: 16 }}>
          <StyledButton onClick={this.handleIpcSend}>请求主线程</StyledButton>
          <StyledButton onClick={this.openNewWindow}>打开新窗口</StyledButton>
          <Link to="/">
            <StyledButton>回到主页</StyledButton>
          </Link>
        </div>
      </div>
    );
  }
}

export default HelloProger;
