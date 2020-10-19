<template>
  <Header />
  <Status />
  <Content />
  <Action />
</template>

<script>
import Header from '@/components/Header/index'
import Status from '@/components/Status/index'
import Content from '@/components/Content/index'
import Action from '@/components/Action/index'

export default {
  name: 'App',
  components: {
    Status,
    Header,
    Content,
    Action
  }
}
</script>

<style lang="scss">
html, body {
  width: 350px;
  margin: 0;
}

#app {
  font-family: "Metropolis", sans-serif, "SF Pro Text", "Segoe UI", Roboto, "Open Sans";
}
</style>
