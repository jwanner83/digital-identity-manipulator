<template>
  <div class="action">
    <button class="action-button" @click="mutate">
      {{ message }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'Action',
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    message () {
      return this.active ? 'Deactivate' : 'Activate'
    }
  },
  methods: {
    mutate () {
      this.$emit('change')
    }
  }
}
</script>

<style lang="scss">
.action {
  height: 60px;

  &-button {
    cursor: pointer;
    height: 100%;
    width: 100%;
    margin: 0;
    border: none;
    color: #20123a;
    background-color: #ededf0;
    font-size: 15px;
    transition: 0.2s;

    &:hover {
      opacity: 0.5;
    }

    &:active {
      opacity: 1;
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
