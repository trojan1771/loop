import React from 'react'
import Data from '../data/data.js'
import Card from './Card.js'
import { useState } from 'react'

const Maps = () => {
  const [data, setData] = useState([...Data])
  console.log('data', data)

  const handleBookmark = (index) => {
    console.log('handlebookmark called with index..', index)
    // data[index].bookmarked = true

    setData((prev) => {
      return prev.map((item, i) => {
        console.log('loler')
        if (i === index) {
          item.bookmarked = true
          console.log('lol it is bookmarked now')
        }
        return item
      })
    })

    console.log(data)
  }

  const handleRemove = (index) => {
    setData((prev) => {
      return prev.filter((item, i) => i !== index.index)
    })
    console.log(data)
  }

  console.log('data..', data)
  return (
    <>
      <div
        style={{
          height: '88%',
          width: '94%',
          background: 'white',
          margin: 'auto',
          padding: '20px',
          paddingLeft: '80px',
          borderRadius: '10px',
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
          overflow: 'scroll',
          display: 'grid',

          gridTemplateColumns: 'repeat(4, 2fr)',
          gridAutoRows: 'auto',
          gridGap: '20px',
        }}
      >
        {data?.map((d, index) => {
          return (
            <Card
              d={d}
              index={index}
              handleBookmark={handleBookmark}
              handleRemove={handleRemove}
            />
          )
        })}
      </div>
    </>
  )
}

export default Maps
