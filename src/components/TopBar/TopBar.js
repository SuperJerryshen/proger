import React, { Component } from 'react'
import styled from 'styled-components'

class TopBar extends Component {
  render() {
    const Header = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      background: linear-gradient(
        15deg,
        rgba(255, 255, 255, 0.95),
        rgba(235, 235, 235, 0.95)
      );
      border-bottom: 1px solid #dfdfdf;
      width: 100%;
      height: 48px;
      flex: 0 0 48px;
      font-size: 14px;
      -webkit-app-region: drag;
      user-select: none;
    `
    return (
      <Header>
        <div>{this.props.title}</div>
      </Header>
    )
  }
}

export default TopBar
