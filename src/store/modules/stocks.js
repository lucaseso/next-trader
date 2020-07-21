import stocksMock from '@/helpers/StocksMock'

export default {
    state: {
        stocks: []
    },
    mutations: {
        setStocks(state, stocks) {
            state.stocks = stocks
        }
    },
    actions: {
        buyStock({ commit }, order) {
            commit()
        },
        initStocks({commit}) {
            commit('setStocks', stocksMock)
        }
    },
    getters: {
        stocks(state) {
            return state.stocks;
        }
    }
}