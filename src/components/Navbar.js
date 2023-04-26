import React from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import searchbk from '../assets/searchback.jpg'

const Navbar = () => {
  return (
    <>
      <div
        style={{
          marginLeft: '10px',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
          backgroundImage: 'url(' + searchbk + ')',
          backgroundSize: 'contain',
          border: 'solid',
          borderColor: '#F05E16',
          height: '100vh',

          borderRadius: '35px',
          padding: '20px',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',

          alignItems: 'center',
        }}
      >
        <InputGroup className='mb-2' style={{ width: '60%' }}>
          <Form.Control
            placeholder='Restraunt Name Here'
            aria-label="Recipient's username"
            aria-describedby='basic-addon2'
          />
          <InputGroup.Text id='basic-addon2'>Find</InputGroup.Text>
        </InputGroup>
      </div>
    </>
  )
}

export default Navbar
