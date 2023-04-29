import React from 'react'

import Card from './Card.js'

const Maps = ({ data, setData, activeTab, setActiveTab }) => {
  console.log('data', data)

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
    setData((prev) => {
      return prev.map((item, i) => {
        console.log('loler')
        if (i === index.index) {
          if (activeTab == 'home') {
            item.display = false
          } else {
            item.bookmarked = false
          }
          console.log('lol it is bookmarked now')
        }
        return item
      })
    })
  }

  console.log('data..', data.records)
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
