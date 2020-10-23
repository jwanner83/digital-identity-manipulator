<template>
  <div class="settings-header header">
    <div class="settings-header-arrow-wrapper" @click="$emit('change')">
      <svg class="settings-header-arrow" xmlns="http://www.w3.org/2000/svg" width="344.000000pt" height="344.000000pt" viewBox="0 0 344.000000 344.000000" preserveAspectRatio="xMidYMid meet">
        <g transform="translate(0.000000,344.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
          <path d="M1430 2155 l-435 -435 435 -435 435 -435 107 107 108 108 -327 327 -328 328 328 328 327 327 -108 108 -107 107 -435 -435z"/>
        </g>
      </svg>
    </div>
    <p class="settings-header-title header-title">Settings</p>
  </div>
</template>

<script>
export default {
  name: 'SettingsHeader'
}
</script>

<style lang="scss">
.settings-header {
  border-bottom: 1px #f1f1f1 solid;

  &-arrow {
    height: 25px;
    width: 25px;

    &-wrapper {
      z-index: 1;
      display: flex;
      padding: 0 5px;
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        opacity: 0.6;
      }

      &:active {
        opacity: 1;
      }
    }
  }

  &-title {
    text-align: center;
    width: 100%;
    font-weight: bold;
    position: absolute;
    right: 0;
  }
}
</style>
