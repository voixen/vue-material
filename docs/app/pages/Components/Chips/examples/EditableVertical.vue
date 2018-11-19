<template>
  <div class="example-editable-vertical">
    <md-chips v-model="fruits" md-placeholder="Add fruit..." md-vertical></md-chips>
  </div>
</template>

<script>
  export default {
    name: 'EditableVertical',
    data: () => ({
      fruits: [
        'Orange',
        'Apple',
        'Pineapple'
      ]
    })
  }
</script>

<style lang="scss">
  .example-editable-vertical {
    width: 320px;
    margin: 0 auto;
  }
</style>
