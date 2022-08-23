<template>
  <div>{{ name }}</div>
  <div v-text="channel"></div>
  <div v-html="htmlData"></div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },

  data() {
    return {
      name: 'Hello Vue',
      channel: 'codevolution',
      htmlData: '<p>Html data</p>'
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
