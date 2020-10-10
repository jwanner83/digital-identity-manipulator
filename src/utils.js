export function wait (max, min) {
  return new Promise(resolve => {
    setTimeout(resolve, getRandomBetween(max, min))
  })
}

export function getRandomBetween (max, min = 1) {
  return Math.floor(Math.random() * max) + min
}