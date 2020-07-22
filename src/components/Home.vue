<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
    <v-sheet :elevation="6" color="primary" class="pa-2">
      <v-icon class="white--text mr-3">info</v-icon>
      <span class="headline white--text font-weight-light">Você pode Salvar & Carregar seus dados</span>
    </v-sheet>
    <v-sheet :elevation="6" color="success" class="pa-2 mt-3 darken-1">
      <v-icon class="white--text mr-3">check</v-icon>
      <span class="headline white--text font-weight-light">Clique em 'Finalizar Dia' para iniciar um novo dia</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1"><strong>Saldo: </strong>{{ funds | currency }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['funds'])
  }
}
</script>

<style>

</style>