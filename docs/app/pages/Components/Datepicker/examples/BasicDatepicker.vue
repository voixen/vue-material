<template>
  <div>
    <md-datepicker v-model="selectedDate" />
    <md-field>
      <label>First day of a week</label>
      <md-select v-model="firstDayOfAWeek">
        <md-option value="0">Sunday</md-option>
        <md-option value="1">Monday</md-option>
      </md-select>
      <span class="md-helper-text">This config is global.</span>
    </md-field>
    <md-field>
      <label>Date format</label>
      <md-select v-model="dateFormat">
        <md-option value="yyyy-MM-dd">default</md-option>
        <md-option value="yyyy/MM/dd">yyyy/MM/dd</md-option>
        <md-option value="dd/MM/yyyy">dd/MM/yyyy</md-option>
        <md-option value="MM/dd/yyyy">MM/dd/yyyy</md-option>
        <md-option value="dd.MM.yyyy">dd.MM.yyyy</md-option>
      </md-select>
      <span class="md-helper-text">This config is global.</span>
    </md-field>
    <md-field>
      <label>Date locale</label>
      <md-select v-model="dateLocale">
        <md-option value="en">default</md-option>
        <md-option value="de">Deutsch</md-option>
      </md-select>
      <span class="md-helper-text">This config is global.</span>
    </md-field>
  </div>
</template>

<script>
  export default {
    name: 'BasicDatepicker',
    data: () => ({
      selectedDate: null
    }),
    computed: {
      firstDayOfAWeek: {
        get () {
          return this.$material.locale.firstDayOfAWeek
        },
        set (val) {
          this.$material.locale.firstDayOfAWeek = val
        }
      },
      dateFormat: {
        get () {
          return this.$material.locale.dateFormat
        },
        set (val) {
          this.$material.locale.dateFormat = val
        }
      },
      dateLocale: {
        get () {
          return this.$material.dateLocale
        },
        set (val) {
          return this.$material.dateLocale = val
        }
      }
    }
  }
</script>
