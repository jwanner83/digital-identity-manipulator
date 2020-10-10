let enabled = true

init()

function init () {
  browser.storage.local.get().then(set)
}

function set (storage) {
  enabled = storage.enabled || false

  if (enabled) {
    document.body.classList.remove('disabled')
    document.body.classList.add('enabled')
  } else {
    document.body.classList.remove('enabled')
    document.body.classList.add('disabled')
  }
}

for (const button of document.querySelectorAll('.button')) {
  button.addEventListener('click', () => {
    if (!enabled) {
      browser.search.search({ query: '' })
    }
    browser.storage.local.set({ enabled: !enabled }).then(init)
  })
}
