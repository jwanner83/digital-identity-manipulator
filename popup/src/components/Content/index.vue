<template>
  <div class="content">
    <Illustration />
    <p class="content-text">Generate and modify digital identities with the help of a Browser Add-on</p>
  </div>
</template>

<script>
import Illustration from '@/components/Content/Illustration'

export default {
  name: 'Content',
  components: {
    Illustration
  }
}
</script>

<style lang="scss">
.content {
  padding: 14px;

  &-text {
    text-align: center;
    font-style: italic;
    color: #4e4e4e;
  }
}
</style>
