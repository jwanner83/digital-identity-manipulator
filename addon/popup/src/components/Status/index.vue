<template>
  <div class="status">
    <p v-if="active" class="status-text status-text-active">active</p>
    <p v-else class="status-text status-text-inactive">currently inactive</p>
  </div>
</template>

<script>
export default {
  name: 'status',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.status {
  text-align: center;
  border-top: 1px #f1f1f1 solid;
  border-bottom: 1px #f1f1f1 solid;
  padding: 16px 0 14px;

  &-text {
    margin: 0;
    font-size: 14px;
    color: #363959;

    &-active {
      font-weight: bold;
    }

    &-inactive {
      font-style: italic;
    }
  }
}
</style>
