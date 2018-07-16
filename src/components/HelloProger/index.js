import HelloProger from './HelloProger'
import { connect } from 'react-redux'

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
