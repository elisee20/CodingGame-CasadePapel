import { Component, h } from 'splay'
import Player from './player'
import InfosMedia from './InfosMedia/InfosMedia'
import SimilarTitles from './similar-titles/similar-titles'
import Actions from './actions'
import Connector from '@connector'
import MyStore from '@stores/mystore'
import '@css/components/details.less'

class Details extends Component {
  displaySimilarTitles = false

  mounted () {
    this.toggleClass(false)
  }

  // Keys
  onKeyPause () {
    Connector.pause()
    MyStore.pausePlayer()
  }

  onKeyPlay () {
    Connector.resume()
    MyStore.resumePlayer()
  }

  onKeyEnter () {
    this.displaySimilarTitles = !this.displaySimilarTitles
    this.toggleClass(this.displaySimilarTitles)
  }

  toggleClass (displaySimilarTitles) {
    const actions = document.getElementById('actions')
    const titles = document.getElementById('titles')
    if (displaySimilarTitles) {
      actions.className = 'hidden'
      titles.className = ''
    } else {
      titles.className = 'hidden'
      actions.className = ''
    }
  }

  render () {
    return (
      <div className="details">
        <div id="actions">
          <Actions parent={this} />
          <InfosMedia parent={this} />
        </div>
        <div id="titles">
          <SimilarTitles parent={this} />
        </div>
        <Player parent={this} />
      </div>
    )
  }
}

export default Details
