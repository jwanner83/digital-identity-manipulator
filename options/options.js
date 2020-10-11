const textarea = document.querySelector('.textarea')

init()

function init () {
  browser.storage.local.get().then(set)
}

function set (storage) {
  let value = storage.keywords || ''
  console.log('value', value)
  textarea.value = value.split(',').join('\n')
}

document.querySelector('.button').addEventListener('click', () => {
  browser.storage.local.set({ keywords: textarea.value.split('\n').join(',') })
  init()
})