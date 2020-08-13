import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    indicadores: [],
    cotizaciones: [],
  },
  mutations: {
    GET_INDICATOR(state, indicadores) {
      state.indicadores = indicadores
    },
    SET_COTIZACION(state, cotizacion) {
      state.cotizaciones.push(cotizacion)
    },
  },
  actions: {
    getIndicator({ commit }) {
      axios.get('https://mindicador.cl/api').then((data) => {
        let indicadores = data.data
        let misIndicadores = []
        misIndicadores.push(indicadores.bitcoin)
        misIndicadores.push(indicadores.utm)
        misIndicadores.push(indicadores.dolar)
        misIndicadores.push(indicadores.euro)
        misIndicadores.push(indicadores.libra_cobre)
        misIndicadores.push(indicadores.uf)
        commit('GET_INDICATOR', misIndicadores)
      })
    },
    setCotizacion({ commit }, cotizacion) {
      commit('SET_COTIZACION', cotizacion)
    },
  },
  getters: {
    fechasOrdenadas: (state) => {
      return state.cotizaciones.sort((a, b) => {
        a.time > b.time ? 1 : a.time < b.time ? -1 : 0
      })
    },
    dolar: (state) => {
      return state.indicadores.find((i) => i.codigo == 'dolar').valor
    },
  },
  modules: {},
})
