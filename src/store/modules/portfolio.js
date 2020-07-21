export default {
    state: {
        funds: 100,
        stocks: []
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
                state.stock.splice(state.stocks.indexOf(record), 1)
            }
            state.funds += stockPrice * quantity;
        }
    }
}