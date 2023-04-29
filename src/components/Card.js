import React from 'react'
import momos from '../assets/momos.jpg'
import Button from 'react-bootstrap/Button'

const Card = ({ d, handleBookmark, handleRemove, index }) => {
  let s = `https://datastudio.google.com/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params={"ds2.name2":"${d.name}"`
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
      >
        <iframe
          src={s}
          width='200px'
          height='300px'
          style={{ border: 0 }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
        ></iframe>
      </div>
      <h5>{d.name} </h5>
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
