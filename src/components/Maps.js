import React from 'react'
import Data from '../data/data.js'
import Card from './Card.js'
import { useState } from 'react'

const Maps = ({ data, setData, activeTab, setActiveTab }) => {
  const [Show, setShow] = useState([])
  console.log('data', data)

  // const updateCards = () => {
  //   console.log('updateCards called')
  //   setShow((prev) => {
  //     return prev.map((item, i) => {
  //       if (i === index) {
  //         item.display = true
  //       } else {
  //         item.display = false
  //       }
  //       return item
  //     })
  //   })
  //   console.log(Show)
  // }

  const handleBookmark = (index) => {
    console.log('handlebookmark called with index..', index)

    setData((prev) => {
      return prev.map((item, i) => {
        console.log('loler')
        if (i === index.index) {
          item.bookmarked = true
          console.log('lol it is bookmarked now')
        }
        return item
      })
    })

    console.log(data)
  }

  const handleRemove = (index) => {
    console.log('handlebookmarkremove called with index..', index)
    setData((prev) => {
      return prev.map((item, i) => {
        console.log('loler')
        if (i === index.index) {
          item.bookmarked = false
          console.log('lol it is bookmarked now')
        }
        return item
      })
    })
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
        {activeTab == 'home' &&
          data?.map((d, index) => {
            if (d.display)
              return (
                <Card
                  d={d}
                  index={index}
                  handleBookmark={handleBookmark}
                  handleRemove={handleRemove}
                />
              )
          })}
        {activeTab == 'bookmarked' &&
          data?.map((d, index) => {
            if (d.display && d.bookmarked)
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
