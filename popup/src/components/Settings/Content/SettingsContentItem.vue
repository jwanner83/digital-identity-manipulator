<template>
  <p class="settings-content-text">
    <span>{{ title }}</span>

    <slot />
  </p>
</template>

<script>
export default {
  name: 'SettingsContentItem',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
