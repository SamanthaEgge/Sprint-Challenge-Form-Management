import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/AxiosWithAuth'

import './Home.scss';
import Mapping from '../Mapping/Mapping'


function Home() {
  const [data, setData] = useState()
  console.log('data init: ', data)

  useEffect(() => {
    console.log('we hit axios with auth')
    axiosWithAuth()
      .get('http://localhost:5000/api/restricted/data/')
      .then(response => {
        setData(response.data);
        console.log('we in da .then response.data: ', response.data)
      })
      .catch(event => {
        console.log('we hit the catch in home');
      });
  }, []);

  return (
    <div className='home-container'>
      Home Page Stuff here
      <div className='friends-list'>
       {data === undefined ? (<div className='loader'>loading</div>) : data.map(data => <Mapping data={data} />)}
      </div>
    </div>
    );
}

export default Home;
