export const state = () => ({
  counts: [0, 0, 0]
})

export const mutations = ({
  //現在の数値を受け取って+1
  countUp: function (state, payload) {
    const tmp = state.counts[payload] + 1
    state.counts.splice(payload, 1, tmp)
  },
  //現在の数値を0に
  countReset: function (state, payload) {
    state.counts.splice(payload, 1, 0)
  }
})

export const actions = ({
  countUp(context, payload) {
    context.commit('countUp', payload)
  },
  countReset(context, payload) {
    context.commit('countReset', payload)
  }
})
