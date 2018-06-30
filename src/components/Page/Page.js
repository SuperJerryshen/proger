import React, { Component, Fragment } from 'react'

class Page extends Component {
  componentDidMount() {
    const { title } = this.props
    title && (document.title = title)
  }

  render() {
    return <Fragment>{this.props.children}</Fragment>
  }
}

export default Page
