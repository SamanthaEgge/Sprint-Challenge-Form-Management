import { useState } from 'react'

const useToken = (key) => {
  console.log('useToken CL :', key)
  const [ token, setToken ] = useState(() => {
    const item = localStorage.getItem(token)
    {item ? setToken(item) : setToken(null)}
  })

  localStorage.setItem('token', key)
  console.log(token)

  return [token, setToken]
}

export default useToken