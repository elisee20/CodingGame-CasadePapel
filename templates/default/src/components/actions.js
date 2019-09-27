import { Component, h } from 'splay'
import MyStore from '@stores/mystore'
import '@css/components/actions.less'

class Actions extends Component {
  getData () {
    return MyStore.getActions().then(_actions => {
      this.actions = _actions.filter(action => !action.hide)
    })
  }

  get dataToSave () {
    return { data: this.data }
  }

  renderActions () {
    const actions = []
    for (const action of this.actions) {
      actions.push(
        <li className={['item', this.focusableClass]}>{action.title}</li>
      )
    }
    return actions
  }

  render () {
    return (
      <div className="actions">
        <ul className="list">
          { this.renderActions() }
        </ul>
      </div>
    )
  }

  // Hooks
  mounted () { this.focus(this.current) }

  // Keys
  onKeyUp () { this.focus(this.current - 1) }

  onKeyDown () { this.focus(this.current + 1) }

  onKeyEnter () {
    console.log('clicked', this.actions[this.current])
  }
}

export default Actions
