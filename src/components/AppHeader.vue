<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Início</v-btn>
      <v-btn flat to="/portfolio">Portfolio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator">Salvar & Carregar</v-btn>
        <v-list>
          <v-list-tile @click="saveData">
            <v-list-tile-title>Salvar Dados</v-list-tile-title>
          </v-list-tile>
          <v-list-tile @click="loadData">
            <v-list-tile-title>Carregar Dados</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
      <v-layout align-center class="px-3">
        <span class="text-uppercase text--gray text--darken-2">
          Saldo: {{ funds | currency }}
        </span>
      </v-layout>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['funds', 'history'])
  },
  methods: {
    ...mapActions({
      endDayAction: 'endDay',
      loadDataAction: 'loadData'
    }),
    endDay() {
      this.endDayAction()
    },
    saveData() {
      const { funds, stockPortfolio, stocks, history } = this.$store.getters
      
      this.$http.put('data.json', { funds, stockPortfolio, stocks, history }).then(data => {
        console.log(data);
      }).catch(error => {
        console.log(error);
      })
    },
    loadData() {
      this.loadDataAction()
    }
  }
}
</script>

<style>

</style>