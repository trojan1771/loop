import React from 'react'
import loginbackground from '../assets/loginbackground.jpg'
import loginimg from '../assets/loginimg.jpg'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState, useEffect } from 'react'

const Login = () => {
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const [Data, setData] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  const handleChangeEmail = (e) => {
    setEmail(e)
    console.log(e)
  }

  const handleChangePassword = (e) => {
    setPassword(e)
    console.log(Password)
  }

  const fetchData = async () => {
    // curl "https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view" \
    //   -H "Authorization: Bearer keyfXgn8PL6pB3x32"

    // Output:
    // {"records":[{"id":"rec7UWjmvv9oDIY2j","createdTime":"2022-06-27T16:20:56.000Z","fields":{"username":"user1","password":"password1"}},{"id":"recupBOdoQu6lDycP","createdTime":"2022-06-27T16:20:56.000Z","fields":{"username":"user2","password":"password2"}},{"id":"recriHz91fVbQlP9o","createdTime":"2022-06-27T16:20:56.000Z","fields":{"username":"user3","password":"password3"}}]}

    await fetch(
      'https://api.airtable.com/v0/appjWdL7YgpxIxCKA/credenitals?maxRecords=3&view=Grid%20view',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer keyfXgn8PL6pB3x32',
        },
      }
    ).then((res) => {
      console.log('res..', res)
      setData(res.json())
    })
  }

  const handleSubmit = () => {}

  return (
    <div
      style={{
        backgroundImage: 'url(' + loginbackground + ')',

        height: '100vh',

        width: '100vw',
        padding: '20px',
        zIndex: -3,
      }}
    >
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
                  <h3>Email address</h3>
                </Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='email'
                  value={Email}
                  onChange={(e) => handleChangeEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group
                className='mb-4'
                controlId='exampleForm.ControlInput1'
                name='password'
                value={Password}
                onChange={(e) => handleChangePassword(e.target.value)}
              >
                <Form.Label>
                  <h3>Password</h3>
                </Form.Label>
                <Form.Control type='email' placeholder='Enter Password' />
              </Form.Group>
              <Button variant='primary' type='submit' onClick={handleSubmit()}>
                Login
              </Button>{' '}
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
