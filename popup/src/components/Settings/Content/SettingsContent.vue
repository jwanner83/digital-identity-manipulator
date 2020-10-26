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
    <SettingsContentItem title="Interact with the external result page">
      <SettingsContentSwitch v-model="interactResult" />
    </SettingsContentItem>

    <h1 class="settings-content-heading">Keywords</h1>
    <SettingsContentItem title="Add chance for a typo">
      <SettingsContentSwitch v-model="addTypoChance" />
    </SettingsContentItem>

    <button class="settings-content-button" @click="openKeywords">Modify keywords</button>
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
      debug: false,
      navigateToPlain: true,
      maximalInteractions: 6,
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

    this.debug = storage.debug || this.setDefault('debug', this.debug)
    this.navigateToPlain = storage.navigateToPlain || this.setDefault('navigateToPlain', this.navigateToPlain)
    this.maximalInteractions = storage.maximalInteractions || this.setDefault('maximalInteractions', this.maximalInteractions)
    this.interactResults = storage.interactResults || this.setDefault('interactResults', this.interactResults)
    this.interactResult = storage.interactResult || this.setDefault('interactResult', this.interactResult)
    this.addTypoChance = storage.addTypoChance || this.setDefault('addTypoChance', this.addTypoChance)
  },
  methods: {
    openKeywords () {
      browser.runtime.openOptionsPage()
    },
    setDefault (key, value) {
      browser.storage.local.set({ [key]: value })
      return value
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

  &-button {
    font-size: 14px;
    width: 100%;
    padding: 5px;
    background: #f0f0f0;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      opacity: 0.7;
    }

    &:active {
      opacity: 1;
    }
  }
}
</style>
