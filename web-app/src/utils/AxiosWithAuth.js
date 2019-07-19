import axios from 'axios';
import useToken from '../hooks/useToken'

const axiosWithAuth = () => {
  // const [token, settingToken] = useToken()
  const token = localStorage.getItem('token');

  return axios.create({
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `${token}`,
      }
  });
};

export default axiosWithAuth;