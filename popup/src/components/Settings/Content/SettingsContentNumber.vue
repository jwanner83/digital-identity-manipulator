<template>
  <label class="number settings-content-element">
    <input :value="modelValue" type="number" @change.stop="mutate">
  </label>
</template>

<script>
export default {
  name: 'SettingsContentNumber',
  props: {
    modelValue: {
      type: Number,
      default: 1
    }
  },
  methods: {
    mutate (value) {
      this.$emit('update:modelValue', Number.parseInt(value.target.value))
    }
  }
}
</script>
