import { Component, h } from 'splay'
import Player from './player'
import '@css/components/details.less'

class Details extends Component {
  render () {
    return (
      <div className="details">
        <Player parent={this} />
      </div>
    )
  }
}

export default Details
