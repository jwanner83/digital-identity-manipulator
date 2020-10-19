<template>
  <div class="status">
    <p class="status-text">currently inactive</p>
  </div>
</template>

<script>
export default {
  name: 'status'
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
    font-style: italic;
  }
}
</style>
