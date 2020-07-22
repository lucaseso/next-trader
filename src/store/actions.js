import Vue from 'vue'

export default {
    async loadData({ commit }) {
        const response = await Vue.prototype.$http.get('data.json')
        const data = response.data
        commit('setStocks', data.stocks)
        commit('setPortfolio', {
            funds: data.funds,
            stockPortfolio: data.stockPortfolio ? data.stockPortfolio : []
        })
    }
}