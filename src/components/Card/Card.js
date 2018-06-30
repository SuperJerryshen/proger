import { Card } from '@material-ui/core'
import styled from 'styled-components'

const StyledCard = styled(Card)`
  && {
    position: relative;
    box-shadow: none;
    border: 1px solid #eee;
    border-radius: 6px;
    overflow: inherit;
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 24px 16px -20px rgba(128, 128, 128, 0.2);
      transform: translate(0, -2px);
    }
  }
`

export default StyledCard
