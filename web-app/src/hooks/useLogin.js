import { useState } from 'react'

const useLogin = (key) => {
  const [ login, setLogin ] = useState(key);
  console.log('we hit custom useLogin')
  const settingLogin = (key) => {
    setLogin(key)
    console.log('were settinglogin')
    console.log('loginsetting', login)
  }

  return [login, settingLogin]
}

export default useLogin