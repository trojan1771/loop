import React from 'react'

import Button from 'react-bootstrap/Button'

const Card = ({ d, handleBookmark, handleRemove, index }) => {
  return (
    <div
      style={{
        height: '400px',
        width: '250px',

        borderRadius: '20px',
        marginTop: '40px',
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '5px 5px 5px 5px #C5C6D0',
      }}
    >
      <div
        style={{
          height: '300px',
          width: '200px',

          borderRadius: '20px',
        }}
      ></div>
      <h5>
        {d.name} : {index}:{d.imgurl}
      </h5>
      <div style={{ display: 'flex', justifyItems: 'center' }}>
        <Button
          variant='primary'
          style={{ width: '48%' }}
          onClick={() => handleBookmark({ index })}
        >
          BookMark
        </Button>{' '}
        <Button
          variant='danger'
          style={{ width: '48%' }}
          onClick={() => handleRemove({ index })}
        >
          Remove
        </Button>{' '}
      </div>
    </div>
  )
}

export default Card
