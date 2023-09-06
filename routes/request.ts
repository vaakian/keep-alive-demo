import { agent } from '../service'
import { fetch } from 'node-fetch'

export default eventHandler(() => {
  const request = (delay: number) =>
    fetch(`http://httpbin.org/delay/${delay}`, {
      agent
    }).then(res => res.json())

  return Promise.all([
    request(1),
    request(2),
    request(1),
    request(2) // pending
  ])
})
