import { Component, h } from 'splay'
import Connector from '@connector'
import '@css/components/player.less'

class Player extends Component {
  // Hooks
  mounted () {
    Connector.play({
      parentalMaxRating: 16,
      position: 0,
      positionType: 1,
      preloads: [],
      uri: 'hls://?start_bw=1800000&bw_limit=0&bw_limit_mode=1&source=http%3A%2F%2Fhls-od-mycanal-canalplus.akamaized.net%2Fnagra%2Fcanalplus%2Fcanalplus%2FANT_1202548_1%2F80407%2FANT_1202548_1.m3u8&licence=data%3Aapplication%2Fx-prm-license%3Bbase64%2CIKECAABT%2FAEAAdbx%2F%2F%2F%2F%2F9ybeAdGzvPlg%2FJ4iQ8S7zEZxUVzWKYN6OhiTVkPt1sX8gepVSIHBbraG1j84391XB5WyJOGzezYZgzOLx1uOU7a0y44qcqRRMP5fOfkZ3wXzAy8dRbFk%2BAaMgaO7Muv616E8Buapa4jE2ijIdMmEd%2FEK5pAwowNJ8yga3p%2FUbqFOAbmvHBw63Bu5hA8CoiJZ2BRc73fMWzKzEd%2FwSnsyrfOI3Ncw%2FVgayWhAgAATf8BQWMc8n3wyp0mFl%2BjFPyW37%2B0p0WHJhPbhNaypt0QgS0ndMvqXcs%2BBy7pzz6NoprFPU8IyKc901BT0Q7ZnifBvd5D%2BATGRgmbczQyGWwyKVfD%2BOijjQLktGmvRFyMdQHJ1or%2FqDY2MdK6QcOjA2aYKNrHrp7D2bSlOiY%2By70IP%2BsQ1Bkv0vMbgT1KIlJoTmZSFzysznyziM4RrZMZWWm5h0BDVw1Q6hq1',
      zapId: 'webapp_3'
    })
  }

  render () {
    return (
      <div className="player"></div>
    )
  }
}

export default Player
