export function wait (min, max) {
  return new Promise(resolve => {
    setTimeout(resolve, Math.floor(Math.random() * max) + min)
  })
}