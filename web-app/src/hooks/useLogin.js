import { useState } from 'react'

const useLogin = (key) => {
  const [ login, setLogin ] = useState(key);

  const settingLogin = (key) => {
    setLogin(key)
  }

  return [login, settingLogin]
}

export default useLogin