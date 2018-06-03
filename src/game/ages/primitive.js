// 原始人时代
import Age from './base'

class Primitive extends Age {
  getName() {
    return '原始时代'
  }

  getResource() {
    return [{
      name: '碎石'
    }, {
      name: '碎木'
    }, {
      name: '小石头'
    }, {
      name: '泥土'
    }]
  }
}

export default Primitive
