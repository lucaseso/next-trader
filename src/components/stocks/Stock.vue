<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field 
          label="Quantidade" 
          type="number" 
          :error="!isFundsSufficient"
          v-model.number="quantity"></v-text-field>
        <v-btn
         class="green darken-3 white--text"
         @click="buyStock"
         :disabled="!isQuantityValid"
         >{{isFundsSufficient ? 'Comprar' : 'Fundo Insuficiente'}}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      quantity: 0
    }
  },
  computed: {
    ...mapGetters(['funds']),
    isQuantityValid() {
      return this.isFundsSufficient && this.quantity > 0 && Number.isInteger(this.quantity)
    },
    isFundsSufficient() {
      return this.funds >= (this.quantity * this.stock.price)
    }
  },
  methods: {
    ...mapActions({buyStockStore: 'buyStock'}),
    buyStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: this.quantity
      }
      this.buyStockStore(order)
      this.quantity = 0;
    }
  }
}
</script>

<style>

</style>