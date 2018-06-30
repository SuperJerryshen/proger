import React, { Component } from 'react'
import { Terminal } from 'xterm'

import 'xterm/dist/xterm.css'

class XTerm extends Component {
  componentDidMount() {
    this.term = new Terminal()
    this.term.open(this.xterm)
    this.term.on('data', this.onInput)
  }

  onInput = data => {
    this.term.write(data)
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: 300,
        }}
        ref={el => {
          this.xterm = el
        }}
      />
    )
  }
}

export default XTerm
