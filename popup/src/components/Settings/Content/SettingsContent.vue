<template>
  <div class="settings-content">
    <h1 class="settings-content-heading">General</h1>
    <p class="settings-content-text">
      <span>Enable <code>console.log</code> outputs</span>

      <label class="switch settings-content-element">
        <input v-model="debug" type="checkbox" @change.stop>
        <span class="slider round"></span>
      </label>
    </p>

    <p class="settings-content-text">
      <span>Navigate to plain page after result</span>

      <label class="switch settings-content-element">
        <input v-model="navigateToPlain" type="checkbox" @change.stop>
        <span class="slider round"></span>
      </label>
    </p>

    <h1 class="settings-content-heading">Interactions</h1>
    <p class="settings-content-text">
      <span>Maximal interaction amount</span>

      <label class="number settings-content-element">
        <input v-model="maximalInteractions" type="number" @change.stop>
      </label>
    </p>

    <p class="settings-content-text">
      <span>Interact with the google results page</span>

      <label class="switch settings-content-element">
        <input v-model="interactResults" type="checkbox" @change.stop>
        <span class="slider round"></span>
      </label>
    </p>

    <p class="settings-content-text">
      <span>Interact with specific result page</span>

      <label class="switch settings-content-element">
        <input v-model="interactResult" type="checkbox" @change.stop>
        <span class="slider round"></span>
      </label>
    </p>

    <h1 class="settings-content-heading">Keywords</h1>
    <p class="settings-content-text">
      <span>Add chance for a typo</span>

      <label class="switch settings-content-element">
        <input v-model="addTypoChance" type="checkbox" @change.stop>
        <span class="slider round"></span>
      </label>
    </p>
  </div>
</template>

<script>
export default {
  name: 'SettingsContent',
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

code {
  background: #e1e1e1;
  padding: 3px 5px;
  border-radius: 2px;
}

.number {
  input {
    width: 38px;
    background: #f0f0f0;
    padding: 5px;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 18px;

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: #2196F3;
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #2196F3;
    }

    &:checked + .slider:before {
      transform: translateX(12px);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;

    &.round {
      border-radius: 15px;

      &:before {
        border-radius: 50%;
      }
    }

    &:before {
      position: absolute;
      content: "";
      height: 10px;
      width: 10px;
      left: 4px;
      bottom: 4px;
      background-color: white;
      transition: .4s;
    }
  }
}
</style>
