<template>
  <div>
    <v-container>
      <div style="justify-content: center; display: flex" class="mb-2">
        <ButtonEntry />
      </div>
      <result />
      <final-review />
      <theme-sample />
      <examination-criteria />
      <award />
      <guide-line />
      <schedule />
    </v-container>
    <v-container fluid class="white">
      <v-container>
        <special-sponsor />
        <sponsor />
        <personal-sponsors />
      </v-container>
    </v-container>
    <v-container>
      <organizer />
      <contact />
    </v-container>
  </div>
</template>

<style scoped>
.index {
  overflow: hidden;
}
</style>
<script>
import ButtonEntry from '../components/ButtonEntry'
export default {
  components: { ButtonEntry },
}
</script>
