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
      browser.storage.local.set({ debug: value })
    },
    navigateToPlain (value) {
      browser.storage.local.set({ navigateToPlain: value })
    },
    maximalInteractions (value) {
      browser.storage.local.set({ maximalInteractions: value })
    },
    interactResults (value) {
      browser.storage.local.set({ interactResults: value })
    },
    interactResult (value) {
      browser.storage.local.set({ interactResult: value })
    },
    addTypoChance (value) {
      browser.storage.local.set({ addTypoChance: value })
    }
  },
  async created () {
    const storage = await browser.storage.local.get()

    this.debug = storage.debug
    this.navigateToPlain = storage.navigateToPlain
    this.maximalInteractions = storage.maximalInteractions
    this.interactResults = storage.interactResults
    this.interactResult = storage.interactResult
    this.addTypoChance = storage.addTypoChance
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
