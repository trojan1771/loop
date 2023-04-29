import React, { useEffect } from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import searchbk from '../assets/searchback.jpg'
import Data from '../data/data.js'

const Navbar = ({ data, setData }) => {
  const [searchkey, setSearchKey] = useState('')
  const [matched, setMatched] = useState([])

  const searchhandler = (text) => {
    setSearchKey(text)
    let matches = data.filter((rest) => {
      const regex = new RegExp(`${text}`, 'gi')
      return rest.name.match(regex)
    })
    setMatched(matches)
    console.log(matches)
  }

  const clickhandler = (name) => {
    // console.log('clickhandler working...')
    // data.map((d) => {
    //   if (d.name == name) {
    //     console.log('match found')
    //     d.display = true
    //   }
    // })
    // console.log(data)

    console.log('clcikhandler called with name..', name)

    setData((prev) => {
      return prev.map((item) => {
        if (item.name === name) {
          item.display = true
          console.log('lol it is bookmarked now')
        }
        return item
      })
    })

    console.log(data)
  }

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
            onChange={(e) => searchhandler(e.target.value)}
          />
          <InputGroup.Text id='basic-addon2'>Find</InputGroup.Text>
        </InputGroup>
        {matched.length > 0 &&
          searchkey.length > 0 &&
          matched.map((rest) => {
            return (
              <div
                style={{
                  height: '40px',
                  width: '50%',
                  background: 'white',
                  border: 'solid',
                  zIndex: 1000,
                  borderRadius: '10px',
                  padding: '5px',
                  margin: '10px',
                  borderColor: '#F05E16',
                }}
                onClick={() => {
                  clickhandler(rest.name)
                }}
              >
                {rest.name}
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Navbar
