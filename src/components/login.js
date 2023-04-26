import React from 'react'
import loginbackground from '../assets/loginbackground.jpg'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'

const Login = ({ setIsLoggedin }) => {
  const [Username, setUsername] = useState('')
  const [Password, setPassword] = useState('')
  const [Data, setData] = useState({})

  useEffect(() => {
    console.log('useEffect runnign')
    fetchData()

    console.log('Dataa at line 16..', Data)
  }, [])

  const handleChangeEmail = (e) => {
    setUsername(e)
  }

  const handleChangePassword = (e) => {
    setPassword(e)
  }

  const fetchData = async () => {
    await fetch(
      'https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: 'Bearer keyfXgn8PL6pB3x32',
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
  }

  const handleSubmit = () => {
    for (let i = 0; i < 3; i++) {
      let record = Data.records[i]
      console.log(record)
      if (
        record.fields.username === Username &&
        record.fields.password === Password
      ) {
        console.log('match found')
        setIsLoggedin(true)
      } else {
        console.log('match not found')
      }
    }
  }

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '0',
          filter: 'blur(' + 3 + 'px)',
          backgroundImage: 'url(' + loginbackground + ')',

          height: '100vh',

          width: '100vw',
          padding: '20px',
          zIndex: -3,
        }}
      ></div>
      <div
        style={{
          background: 'white',

          width: '60vw',
          height: '60vh',
          margin: 'auto',
          marginTop: '20vh',

          display: 'flex',
        }}
      >
        <div
          className='loginimg'
          style={{
            width: '50%',
            background: 'yellow',
            backgroundImage: 'url(' + loginbackground + ')',
            backgroundSize: 'cover',
            padding: '60px',
            color: 'white',
          }}
        >
          <h1 style={{ fontSize: '64px' }}>Welcome...</h1>
          <p style={{ fontSize: '20px' }}>to LoopFood...</p>
        </div>
        <div
          className='loginform'
          style={{
            width: '50%',
            padding: '40px',
          }}
        >
          <div
            style={{
              justifyContent: 'center',
              height: '100%',
              width: '100%',
              border: 'solid',
              borderColor: '#faca8b',
              borderRadius: '10px',
              textAlign: 'center',
              display: 'flex',
              //flexDirection: 'column',
              alignItems: 'center',
              padding: '20px',
            }}
          >
            <Form>
              <Form.Group
                className='mb-3'
                controlId='exampleForm.ControlInput1'
              >
                <Form.Label>
                  <h3>Username</h3>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter Username'
                  value={Username}
                  onChange={(e) => handleChangeEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-4'
                controlId='exampleForm.ControlInput1'
                value={Password}
                onChange={(e) => handleChangePassword(e.target.value)}
              >
                <Form.Label>
                  <h3>Password</h3>
                </Form.Label>
                <Form.Control type='password' placeholder='Enter Password' />
              </Form.Group>
              <Button variant='primary' onClick={() => handleSubmit()}>
                Login
              </Button>{' '}
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
