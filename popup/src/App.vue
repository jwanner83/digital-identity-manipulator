<template>
  <div :class="[ 'app', { 'settings-active' : settingsActive } ]">
    <Header @change="settingsActive = !settingsActive" />
    <Status />
    <Content />
    <Action />
  </div>

  <Settings :active="settingsActive" @change="settingsActive = !settingsActive" />
</template>

<script>
import Header from '@/components/Header/index'
import Status from '@/components/Status/index'
import Content from '@/components/Content/index'
import Action from '@/components/Action/index'
import Settings from '@/components/Settings/index'

export default {
  name: 'App',
  components: {
    Settings,
    Status,
    Header,
    Content,
    Action
  },
  data () {
    return {
      settingsActive: false
    }
  }
}
</script>

<style lang="scss">
html, body {
  width: 350px;
  margin: 0;
}

#app {
  position: relative;
  overflow: hidden;
  font-family: "Metropolis", sans-serif, "SF Pro Text", "Segoe UI", Roboto, "Open Sans";
}

.app {
  opacity: 1;
  transition: 0.5s;

  &.settings-active {
    opacity: 0;
  }
}
</style>
