import React, { useState, useEffect } from 'react'
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
// import useToken from '../../hooks/useToken'

import './Login.scss'

function Login({ touched, errors}) {
  const token = localStorage.getItem('token');
  const [login, setLogin] = useState('login')

  if (token) {
    return <Redirect to='/' />
  }

  const toggleLogin = (event) => {
    event.preventDefault()
    setLogin('login')
    console.log(login)
  }

  const toggleRegistration = (event) => {
    event.preventDefault()
    setLogin('registration')
    console.log(login)
  }

  return(
    <>
    <div className='login-header'>
      <h2>{login === 'login' ? 'Login' : 'Register'}</h2>
    </div>
    <div className='registration-check'>
      <Button.Group size='large'>
        <Button onClick={toggleLogin}>Login</Button>
        <Button.Or />
        <Button onClick={toggleRegistration}>Register</Button>
      </Button.Group>
    </div>
    <Form className='login-form'>
      <div className='form-group'>
        <label className='label'>Username</label>
        <Field
          className='input'
          name='username'
          type='username'
          autoComplete='off'
          />
        <p>{touched.username && errors.username}</p>
      </div>
      <div className='form-group'>
        <label className='label'>Password</label>
        <Field
          className='input'
          name='password'
          type='password'
          autoComplete='off'
          />
        <p>{touched.password && errors.password}</p>
        <button className="btn">Submit &larr;</button>
      </div>
    </Form>
    </>
  )
}

export default withFormik({
  mapPropsToValues() {
    return {
      username: '',
      password: ''
    };
  },
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required()
      .min(3),
    password: Yup.string()
      .required()
      .min(6)
  }),
  handleSubmit(values, formikBag) {
    console.log('im in da handle submit')
    console.log(formikBag.props)
    {formikBag.props.login === 'login' ? 
    axios
      .post('http://localhost:5000/api/login', values)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        console.log('checking for token data:', response.data.token)
        formikBag.props.history.push('/');
        formikBag.props.setToken(response.data.token)
      })
      .catch((e) => {
        console.log(e.response);
      }) :
    axios
      .post('http://localhost:5000/api/register', values)
      .then((response) => {
        // setToken(response.data.token)
        localStorage.setItem('token', response.data.token)
        console.log('checking for token data:', response.data.token)
        formikBag.props.history.push('/');
        formikBag.props.setToken(response.data.token)
      })
      .catch((e) => {
        console.log(e.response);
      })
  }
}
})(Login);