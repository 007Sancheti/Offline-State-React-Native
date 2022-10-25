import NetInfo from '@react-native-community/netinfo'
import Toast from 'react-native-toast-message'  
useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log('Connection type', state.type)
      console.log('Is connected?', state.isConnected)
      if (!state.isConnected) {
        Toast.show({
          type: 'error',
          text1: `You're offline. Please check your internet connection`,
          position: 'bottom',
          autoHide: false
        })
      } else {
        Toast.hide();
      }
    })
    return () => {
      unsubscribe()
    }
  }, [])
