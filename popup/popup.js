let enabled
let keywords

init()

function init () {
  browser.storage.local.get().then(set)
}

function set (storage) {
  enabled = storage.enabled || false
  keywords = storage.keywords || false

  if (enabled) {
    document.body.classList.remove('disabled')
    document.body.classList.add('enabled')
  } else {
    document.body.classList.remove('enabled')
    document.body.classList.add('disabled')
  }

  if (!keywords) {
    document.body.classList.add('no-keywords')
    browser.storage.local.set({ enabled: false }).then(init)
  }
}

for (const button of document.querySelectorAll('.button')) {
  button.addEventListener('click', () => {
    if (!keywords) {
      return
    }

    if (!enabled) {
      browser.search.search({ query: '' })
    }
    browser.storage.local.set({ enabled: !enabled }).then(init)
  })
}

document.querySelector('.settings').addEventListener('click', () => {
  browser.runtime.openOptionsPage()
})
