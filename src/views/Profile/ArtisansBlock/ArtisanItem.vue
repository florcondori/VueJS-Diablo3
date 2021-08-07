<template>
    <div class="icon d-flex justify-content-center align-items-center rounded-circle mr-2">
    <!-- <span class="display-4">{{ artisan.emoji}}</span> -->
    <!-- Usar Ícono -->
    <font-awesome-icon :icon="artisan.icon" class="fa-2x" :style="{color: artisan.color}"/>
    </div>
</template>

<script>
export default {
  name: 'ArtisanItem',
  props: {
    artisan: {
      required: true,
      type: Object
    }
  }
}
</script>

<style lang="stylus" scoped>
  .artisan-item
    .icon
      width 80px
      height 80px
      background-color #404850
</style>
