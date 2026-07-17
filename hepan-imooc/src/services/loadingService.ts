interface LoadingHandler {
  show: () => void
  hide: () => void
}

let loadingHandler: LoadingHandler | null = null

export function registerLoadingHandler(handler: LoadingHandler) {
  loadingHandler = handler
}

export function unregisterLoadingHandler() {
  loadingHandler = null
}

export function showGlobalLoading() {
  loadingHandler?.show()
}

export function hideGlobalLoading() {
  loadingHandler?.hide()
}
