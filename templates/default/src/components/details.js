import { Component, h } from 'splay'
import Player from './player'
import InfosMedia from '@components/InfosMedia/InfosMedia'
import '@css/components/details.less'

class Details extends Component {
  render () {
    return (
      <div className="details">
        <Player parent={this} />
        <InfosMedia parent={this} />
      </div>
    )
  }
}

export default Details
