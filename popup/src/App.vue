<template>
  <Header />
  <Status />
  <Content />
</template>

<script>
import Header from '@/components/Header/index'
import Status from '@/components/Status/index'
import Content from '@/components/Content/index'

export default {
  name: 'App',
  components: {
    Status,
    Header,
    Content
  }
}
</script>

<style lang="scss">
html, body {
  width: 350px;
  margin: 0;
  border: 1px solid;
}

#app {
  font-family: "Metropolis", sans-serif, "SF Pro Text", "Segoe UI", Roboto, "Open Sans";
}
</style>
