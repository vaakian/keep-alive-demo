import {
  getPendingRequestCount,
  closeCount,
  connectCount,
  getActiveSocketCount,
  getFreeSocketCount
} from '../service'

export default eventHandler(() => {
  return {
    closeCount,
    connectCount,
    pendingRequest: getPendingRequestCount(),
    activeSocket: getActiveSocketCount(),
    freeSocket: getFreeSocketCount()
  }
})
