<template>
  <div class="settings-content">
    <h1 class="settings-content-heading">General</h1>
    <SettingsContentItem title="Enable debug mode">
      <SettingsContentSwitch v-model="debug" />
    </SettingsContentItem>
    <SettingsContentItem title="Navigate to plain page after result">
      <SettingsContentSwitch v-model="navigateToPlain" />
    </SettingsContentItem>

    <h1 class="settings-content-heading">Interactions</h1>
    <SettingsContentItem title="Maximal interaction amount">
      <SettingsContentNumber v-model="maximalInteractions" />
    </SettingsContentItem>
    <SettingsContentItem title="Interact with the google results page">
      <SettingsContentSwitch v-model="interactResults" />
    </SettingsContentItem>
    <SettingsContentItem title="settings-content-text">
      <SettingsContentSwitch v-model="interactResult" />
    </SettingsContentItem>

    <h1 class="settings-content-heading">Keywords</h1>
    <SettingsContentItem title="Add chance for a typo">
      <SettingsContentSwitch v-model="addTypoChance" />
    </SettingsContentItem>
  </div>
</template>

<script>
import SettingsContentItem from '@/components/Settings/Content/SettingsContentItem'
import SettingsContentSwitch from '@/components/Settings/Content/SettingsContentSwitch'
import SettingsContentNumber from '@/components/Settings/Content/SettingsContentNumber'

export default {
  name: 'SettingsContent',
  components: {
    SettingsContentSwitch,
    SettingsContentNumber,
    SettingsContentItem
  },
  data () {
    return {
      debug: true,
      navigateToPlain: true,
      maximalInteractions: 1,
      interactResults: true,
      interactResult: true,
      addTypoChance: true
    }
  },
  watch: {
    debug (value) {
      console.log('debug', value)
    },
    navigateToPlain (value) {
      console.log('navigateToPlain', value)
    },
    maximalInteractions (value) {
      console.log('maximalInteractions', value)
    },
    interactResults (value) {
      console.log('interactResults', value)
    },
    interactResult (value) {
      console.log('interactResult', value)
    },
    addTypoChance (value) {
      console.log('addTypoChance', value)
    }
  }
}
</script>

<style lang="scss">
.settings-content {
  padding: 22px;

  &-heading {
    font-size: 16px;

    &:not(:first-child) {
      margin-top: 25px;
    }
  }

  &-text {
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &-element {
    margin-top: -2px;
  }
}
</style>
