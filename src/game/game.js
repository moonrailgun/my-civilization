import Ages from './ages'

class Game {
  constructor(store) {
    this.store = store
    this.ages = this.registerAges()
    console.log(store);
  }

  registerAges() {
    let res = {}
    for (let name in Ages) {
      let age = res[name] = new Ages[name]()

      // 注册资源列表
      let resourceList = age.getResource()
      for (let resource of resourceList) {
        this.registerResource(resource)
      }
    }
    return res
  }

  registerResource({name, desc}) {
    this.store.dispatch('registerResource', {
      name,
      desc
    })
  }
}

export default Game
