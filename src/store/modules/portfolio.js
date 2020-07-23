export default {
    state: {
        funds: 1300.3,
        stocks: [],
        history: []
    },
    mutations: {
        buyStock(state, { stockId, stockPrice, quantity }) {
            const record = state.stocks.find(el => el.id == stockId)
            if(record) {
                record.quantity += quantity
            } else {
                state.stocks.push({
                    id: stockId,
                    quantity
                })
            }
            state.funds -= stockPrice * quantity;
        },
        sellStock(state,  { stockId, stockPrice, quantity }) {
            const record = state.stocks.find(el => el.id == stockId)
            if(record.quantity > quantity) {
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity;
        },
        setPortfolio(state, portfolio) {
            state.funds = portfolio.funds;
            state.stocks = portfolio.stockPortfolio;
        },
        setHistory(state, history) {
            state.history = history
        },
        pushDay(state) {
            state.history.push(state.funds)
        }
    },
    actions: {
        sellStock({ commit }, order) {
            commit('sellStock', order)
        }
    },
    getters: {
        stockPortfolio(state, getters) {
            return state.stocks.map(stock => {
                const stockBase = getters.stocks.find(el => el.id == stock.id)
                return {
                    id: stock.id,
                    quantity: stock.quantity,
                    name: stockBase.name,
                    price: stockBase.price
                }
            })
        },
        funds(state) {
            return state.funds
        },
        history(state) {
            return state.history.slice(0, 30)
        }
    },
}