<template>
  <div>
    <div v-if="!history.length">
      <h1 class="display-1 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
      <page-info>
        Você pode Salvar & Carregar seus dados
      </page-info>
      <page-info color="success" icon="check" class="mt-3 darken-1">
        Clique em 'Finalizar Dia' para iniciar um novo dia
      </page-info>
    </div>
    <div v-else>
      <p class="display-1 font-weight-light mt-4">
        Últimos 30 dias
      </p>

      <v-card
        class="mt-4 mx-auto pa-3"
        max-width=""
      >
        <v-sheet
          class="v-sheet--offset mx-auto history-chart"
          color="cyan"
          elevation="12"
        > 
          <v-sparkline
            :value="history"
            :gradient="['#fff']"
            color="white"
            line-width="1"
            padding="10"
            :auto-draw="true"
            label-size="1"
          ></v-sparkline>
        </v-sheet>

        <v-divider class="my-4"></v-divider>
        <v-card-text class="py-0">
          <div class="headline font-weight-light mb-2">
            <strong>Saldo: </strong>{{ funds | currency }}
          </div>
        </v-card-text>
      </v-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PageInfo from './PageInfo';

export default {
  components: {
    PageInfo
  },
  computed: {
    ...mapGetters(['funds', 'history']),
    labels() {
      return this.history.map(el => {
        const roundMilis = Math.round(el/100)
        return roundMilis
      })
    }
  }
}
</script>

<style scoped>
.history-chart > * {
  font-size: 10px
}
</style>