import HelloProger from './HelloProger'
import { connect } from 'react-redux'
import React from 'react'

const mapState = state => {
  return {
    count: state.counter.count,
  }
}

const mapDispatch = ({ counter: { addCount, asyncAddCount } }) => ({
  addCount,
  asyncAddCount,
})

export default connect(
  mapState,
  mapDispatch
)(HelloProger)
