<template>
  <label class="switch settings-content-element">
    <input :checked="modelValue" type="checkbox" @change.stop="mutate">
    <span class="slider round"></span>
  </label>
</template>

<script>
export default {
  name: 'SettingsContentSwitch',
  props: {
    modelValue: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    mutate (value) {
      this.$emit('update:modelValue', value.target.checked)
    }
  }
}
</script>
