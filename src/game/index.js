import Game from './game'

export default {
  init(store) {
    return new Game(store)
  }
}
