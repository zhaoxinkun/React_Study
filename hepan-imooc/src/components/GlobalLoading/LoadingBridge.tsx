import {useEffect} from 'react'
import {useLoading} from '../../context/LoadingContext'
import {
  registerLoadingHandler,
  unregisterLoadingHandler,
} from '../../services/loadingService'

export default function LoadingBridge() {
  const {showLoading, hideLoading} = useLoading()

  useEffect(() => {
    registerLoadingHandler({
      show: showLoading,
      hide: hideLoading,
    })

    return () => {
      unregisterLoadingHandler()
    }
  }, [showLoading, hideLoading])

  return null
}
