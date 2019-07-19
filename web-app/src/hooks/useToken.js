import { useState } from 'react'

const useToken = (key) => {
  console.log('useToken CL :', key)
  const [ token, setToken ] = useState(() => {
    const item = localStorage.getItem('token');
    console.log('use local item: ', item);
    // return item ? item : localStorage.removeItem('token');
    return item ? item : undefined;
  });

  console.log('useToken token: ',token)

  const settingToken = (key) => {
    localStorage.setItem('token', key);
    setToken(key);
  };

  return [token, settingToken]
}

export default useToken