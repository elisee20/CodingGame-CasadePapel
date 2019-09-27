export default class MyStore {
  static state = {
    player: {
      paused: false
    }
  }

  static getSampleData () {
    return Promise.resolve([
      { name: 'John Doe', work: 'Developer' },
      { name: 'Will Smith', work: 'Actor' },
      { name: 'Borat', work: 'Reporter' }
    ])
  }

  static pausePlayer () {
    MyStore.state.player.paused = true
  }

  static resumePlayer () {
    MyStore.state.player.paused = false
  }

  static getActions () {
    const isPaused = MyStore.state.player.paused
    return Promise.resolve([
      { type: 'RESUME', title: 'Reprendre la lecture', hide: !isPaused },
      { type: 'RESTART', title: 'Reprendre depuis le début' },
      { type: 'RECOMMANDATIONS', title: 'Titres similaires' },
      { type: 'SUBTITLES', title: 'Audio et sous-titres' }
    ])
  }
}
