<template>
  <Header />
  <Status />
</template>

<script>
import Header from '@/components/Header/index'
import Status from '@/components/Status/index'

export default {
  name: 'App',
  components: {
    Status,
    Header
  }
}
</script>

<style lang="scss">
html, body {
  width: 300px;
  margin: 0;
  border: 1px solid;
}

#app {
  font-family: system-ui, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
</style>
