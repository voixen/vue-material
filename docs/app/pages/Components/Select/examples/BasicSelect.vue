<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-field>
          <label for="movie">Movie</label>
          <md-select v-model="movie" name="movie" id="movie">
            <md-option value="fight-club">Fight Club</md-option>
            <md-option value="godfather">Godfather</md-option>
            <md-option value="godfather-ii">Godfather II</md-option>
            <md-option value="godfather-iii">Godfather III</md-option>
            <md-option value="godfellas">Godfellas</md-option>
            <md-option value="pulp-fiction">Pulp Fiction</md-option>
            <md-option value="scarface">Scarface</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item">
        <md-field>
          <md-select v-model="country" name="country" id="country" placeholder="Country">
            <md-option value="australia">Australia</md-option>
            <md-option value="brazil">Brazil</md-option>
            <md-option value="japan">Japan</md-option>
            <md-option value="united-states">United States</md-option>
          </md-select>
        </md-field>
      </div>

      <div class="md-layout-item">
        <md-field>
          <label for="font">Font</label>
          <md-select v-model="font" name="font" id="font">
            <md-option value="arial">Arial</md-option>
            <md-option value="calibri">Calibri</md-option>
            <md-option value="cambria">Cambria</md-option>
            <md-option value="comic-sans">Comic Sans</md-option>
            <md-option value="consolas">Consolas</md-option>
            <md-option value="courier">Courier</md-option>
            <md-option value="droid-sans">Droid Sans</md-option>
            <md-option value="georgia">Georgia</md-option>
            <md-option value="helvetica">Helvetica</md-option>
            <md-option value="impact">Impact</md-option>
            <md-option value="roboto">Roboto</md-option>
            <md-option value="segoe-ui">Segoe UI</md-option>
            <md-option value="times-new-roman">Times New Roman</md-option>
            <md-option value="ubuntu">Ubuntu</md-option>
            <md-option value="verdana">Verdana</md-option>
          </md-select>
        </md-field>
      </div>

<!--
      <div class="md-layout-item">
        <md-field>
          <label for="callday">Callday</label>
          <md-select v-model="selectedDay" name="callday" id="callday">
            <md-option v-for="callDay in callSlots" :key="callDay.start" :value="callDay.start" :name="callDay.start">{{callDay.date.cz}}</md-option>
          </md-select>
        </md-field>
      </div>
-->

    </div>

    <md-button class="md-primary md-raised" @click="movie = 'pulp-fiction'">Set Pulp Fiction</md-button>
  </div>
</template>

<script>
  export default {
    name: 'BasicSelect',
    data: () => ({
      movie: 'godfather',
      country: null,
      font: null,
      selectedDay: null,
      callSlots: [
        {"date":{"en":"Monday, 26th November","cz":"pondělí, 26. listopad"},"start":"2018-11-26","slots":["10:30","11:15","12:00","12:45","13:30","14:15","15:00","15:45","18:15"]},
        {"date":{"en":"Tuesday, 27th November","cz":"úterý, 27. listopad"},"start":"2018-11-27","slots":["09:00","09:45","10:30","11:15","12:00","12:45","13:30","14:15"]},
        {"date":{"en":"Wednesday, 28th November","cz":"středa, 28. listopad"},"start":"2018-11-28","slots":["12:00","12:45"]},
        {"date":{"en":"Thursday, 29th November","cz":"čtvrtek, 29. listopad"},"start":"2018-11-29","slots":["11:00","11:45"]},
        {"date":{"en":"Friday, 30th November","cz":"pátek, 30. listopad"},"start":"2018-11-30","slots":["11:15","12:00"]}
      ]
    })
  }
</script>
