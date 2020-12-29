<template>
  <div :class="[ 'settings', { active: active } ]">
    <SettingsHeader @change="$emit('change')" />
    <SettingsContent />
  </div>
</template>

<script>
import SettingsHeader from '@/components/Settings/Header/SettingsHeader'
import SettingsContent from '@/components/Settings/Content/SettingsContent'

export default {
  name: 'Settings',
  components: {
    SettingsContent,
    SettingsHeader
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.settings {
  position: absolute;
  top: 0;
  left: 100%;
  height: 100%;
  width: 100%;
  background-color: white;
  transition: 0.4s;

  &.active {
    left: 0;
  }
}
</style>
