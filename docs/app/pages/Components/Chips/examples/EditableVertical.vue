<template>
  <div class="example-editable-vertical">
    <md-chips v-model="fruits" md-placeholder="Add fruit..." md-vertical md-check-duplicated
      @md-insert="onInsert"
      @md-delete="onDelete"
      @input="onInput"
    ></md-chips>
    <div v-for="event in events">
      <div>{{ event.type }} : {{ event.data }}</div>
    </div>
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
      ],
      events: []
    }),
    methods: {
      onInsert: function(data) {
        this.events.push({
          type: 'inserted',
          data
        })
      },
      onDelete: function(data, index) {
        this.events.push({
          type: 'deleted',
          data
        })
      },
      onInput: function(data) {
        this.events.push({
          type: 'values',
          data: data.slice()
        })
      }
    }
  }
</script>

<style lang="scss">
  .example-editable-vertical {
    width: 320px;
    margin: 0 auto;
  }
</style>
