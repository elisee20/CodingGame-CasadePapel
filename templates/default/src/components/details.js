import { Component, h } from 'splay'
import Player from './player'
import InfosMedia from '@components/InfosMedia/InfosMedia'
import Actions from './actions'
import Connector from '@connector'
import MyStore from '@stores/mystore'
import '@css/components/details.less'

class Details extends Component {
  // Keys
  onKeyPause () {
    Connector.pause()
    MyStore.pausePlayer()
  }

  onKeyPlay () {
    Connector.resume()
    MyStore.resumePlayer()
  }

  render () {
    return (
      <div className="details">
        <Actions parent={this} />
        <Player parent={this} />
        <InfosMedia parent={this} />
      </div>
    )
  }
}

export default Details
