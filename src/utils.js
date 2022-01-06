export function wait (max, min = undefined) {
  return new Promise(resolve => {
    const time = min ? getRandomBetween(max, min) : max
    setTimeout(resolve, time)
  })
}

export function getRandomBetween (max, min = 1) {
  return Math.floor(Math.random() * max) + min
}

export function getRandomAlphabeticChar () {
  const possibilities = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('')
  return possibilities[Math.floor(Math.random() * possibilities.length)]
}

export async function getKey(key) {
  const storage = await browser.storage.local.get()
  return storage[key]
}