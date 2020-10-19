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
  border-top: 1px #ccc solid;
  border-bottom: 1px #ccc solid;

  &-text {
    font-size: 14px;
    color: #999;
    font-style: italic;
  }
}
</style>
