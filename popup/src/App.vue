<template>
  <div :class="[ 'app', { 'settings-active' : settingsActive } ]">
    <Header @change="settingsActive = !settingsActive" />
    <Status :active="active" />
    <Content />
    <Action :active="active" :invalid="invalid" @change="mutate" />
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
      settingsActive: false,
      active: true,
      invalid: false
    }
  },
  watch: {
    active (value) {
      browser.storage.local.set({ active: value })
    }
  },
  async created () {
    const storage = await browser.storage.local.get()
    this.active = storage.active

    if (!storage.keywords || storage.keywords.split(',').length === 0) {
      this.invalid = true
    }
  },
  methods: {
    mutate () {
      if (!this.invalid) {
        this.active = !this.active
      }
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
