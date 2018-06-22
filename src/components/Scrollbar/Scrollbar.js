import React, { Component } from 'react';
import styled from 'styled-components';
import PerfectScrollbar from 'perfect-scrollbar';

const StyledDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

class Scrollbar extends Component {
  componentDidMount() {
    this.scrollbar = new PerfectScrollbar(this.el, {
      suppressScrollX: true,
    });
  }

  componentWillUnmount() {
    this.scrollbar.destroy();
  }

  render() {
    return (
      <StyledDiv innerRef={el => (this.el = el)}>
        {this.props.children}
      </StyledDiv>
    );
  }
}

export default Scrollbar;
