import { useState } from 'react'

const useToken = (key) => {
  console.log('useToken CL :', key)
  const [ token, setToken ] = useState()
  localStorage.setItem('token', key)
  setToken(localStorage.getItem('token'))
  console.log(token)

  return [token, setToken]
}

export default useToken