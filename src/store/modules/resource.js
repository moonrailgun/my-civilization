const state = {}

const mutations = {
  REGISTER_RESOURCE(state, {name, rate, value, desc}) {
    state[name] = {name, rate, value, desc}
  },
  INCREMENT_RESOURCE_VALUE(state, {name, value}) {
    state[name].value += value;
  }
}

const actions = {
  registerResource({commit}, {name, rate = 0, value = 0, desc=''}) {
    commit('REGISTER_RESOURCE', {
      name,
      rate,
      value,
      desc
    })
  },
  incrementResource({ commit }, {name, value}) {
    commit('INCREMENT_RESOURCE_VALUE', {
      name,
      value
    })
  }
}

export default {
  state,
  mutations,
  actions
}
