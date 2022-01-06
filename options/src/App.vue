<template>
  <div :class="['options-wrapper', { dark }]">
    <h1>Keywords</h1>
    <p>
      Input your search keywords here, <b>separated by a line break</b>. They will be used by the Digital Identity
      Generator as soon as you've written them down
    </p>
    <label class="textarea">
      <textarea v-model="keywords" />
    </label>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      keywords: '',
      dark: false
    }
  },
  async created () {
    const { keywords } = await browser.storage.local.get()
    this.keywords = keywords.split(',').join('\n')

    this.dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        this.dark = event.matches
      })
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
}

.options-wrapper {
  padding: 26px 14px;
  background-color: white;
}

h1 {
  font-size: 22px;
  color: black;
  font-family: "Open Sans", sans-serif;
  margin: 0 0 10px;
}

.textarea {
  textarea {
    width: 100%;
    min-height: 150px;
    background: #f0f0f0;
    padding: 7px;
    border-radius: 2px;
    border: 1px solid #e1e1e1;
    resize: vertical;
    font-family: "Metropolis", sans-serif, "SF Pro Text", "Segoe UI", Roboto, "Open Sans";
    font-size: 14px;
  }
}

.dark {
  background-color: #202022;

  h1, p {
    color: white;
  }

  textarea {
    background: #313134;
    color: white;
  }
}
</style>
