<template>
  <v-layout row wrap v-if="stocks.length">
      <PortfolioStock v-for="stock in stocks" :key="stock.id" :stock="stock" />
  </v-layout>
  <div v-else>
    <p class="headline">Suas ações aparecerão aqui</p>
  </div>
</template>

<script>
import PortfolioStock from './PortfolioStock'
import { mapGetters } from 'vuex'

export default {
  components: { PortfolioStock },
  computed: {
    ...mapGetters({
      stocks: 'stockPortfolio'
    })
  }
}
</script>

<style>

</style>