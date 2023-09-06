import { Socket } from 'net'
import { Agent } from 'http'

export const agent = new Agent({
  keepAlive: true,
  // timeout: 60 * 1000,
  // maxSockets: 100
})

export let connectCount = 0
export let closeCount = 0

export const getActiveSocketCount = () =>
  Object.values(agent.sockets).flat().length

export const getFreeSocketCount = () =>
  Object.values(agent.freeSockets).flat().length

export const getPendingRequestCount = () =>
  Object.values(agent.requests).flat().length

// @ts-ignore
agent.createConnection = (...args) => {
  // @ts-ignore
  const conn = Agent.prototype.createConnection.call(agent, ...args) as Socket
  conn.once('connect', () => connectCount++)
  conn.once('close', () => closeCount++)
  return conn
}
