<template>
  <v-sheet :elevation="6" :color="color" class="pa-2">
    <v-icon :class="textColor" class="mr-3">{{ icon }}</v-icon>
    <span :class="textColor" class="headline font-weight-light">
        <slot></slot>
    </span>
  </v-sheet>
</template>

<script>
export default {
    name: 'PageInfo',
    props: {
        color: {
            type: String,
            default: 'primary'
        },
        textColor: {
            type: String,
            default: 'white--text'
        },
        icon: {
            default: 'info'
        }
    },
}
</script>

<style>

</style>