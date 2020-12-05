<template>
  <h1>Keywords</h1>
  <label class="textarea">
    <textarea v-model="keywords" />
  </label>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      keywords: ''
    }
  },
  async created () {
    const { keywords } = await browser.storage.local.get()
    this.keywords = keywords.split(',').join('\n')
  },
  watch: {
    keywords (value) {
      browser.storage.local.set({ keywords: value.split('\n').filter(Boolean).join(',') })
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  position: relative;
  overflow: hidden;
  font-family: "Metropolis", sans-serif, "SF Pro Text", "Segoe UI", Roboto, "Open Sans";
  padding: 14px;
}

h1 {
  font-size: 22px;
  color: #20123a;
  font-family: "Open Sans", sans-serif;
  margin: 0 0 10px;
}

.textarea {
  textarea {
    width: 100%;
    min-height: 150px;
    background: #f0f0f0;
    padding: 5px;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
    resize: vertical;
    font-family: "Metropolis", sans-serif, "SF Pro Text", "Segoe UI", Roboto, "Open Sans";
    font-size: 14px;
  }
}
</style>
