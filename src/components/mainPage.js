import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Maps from './Maps'

import { useState, useEffect } from 'react'

const MainPage = () => {
  const [data, setData] = useState([])

  const [activeTab, setActiveTab] = useState('home')

  const fetchData = async () => {
    console.log('fetching data...')
    await fetch(
      'https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: 'Bearer keyfXgn8PL6pB3x32',
        },
      }
    )
      .then((res) => res.json())
      .then((Data) => {
        let newarray = []
        Data.records.map((item) => {
          let small = { id: '', bookmarked: false, display: false, name: '' }

          small.id = item.id
          small.name = item.fields.Name
          newarray.push(small)
        })
        setData(newarray)
      })
    console.log('lol', data)
  }

  // fetchData()

  //console.log('data  inside useEffect..', data)

  useEffect(() => {
    console.log('fetching data...')
    fetch(
      'https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=3&view=Grid%20view',
      {
        headers: {
          Authorization: 'Bearer keyfXgn8PL6pB3x32',
        },
      }
    )
      .then((res) => res.json())
      .then((Data) => {
        let newarray = []
        Data.records.map((item) => {
          let small = { id: '', bookmarked: false, display: false, name: '' }

          small.id = item.id
          small.name = item.fields.Name
          newarray.push(small)
        })
        setData(newarray)
      })
    console.log('lol', data)
  }, [])

  console.log('data at 33..', data)

  return (
    <>
      <div className='main' style={{ display: 'flex', padding: '10px' }}>
        <div className='sidebar' style={{ height: '100vh', width: '20vw' }}>
          <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div
          style={{
            height: '100vh',
            width: '70vw',

            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div className='searchbar' style={{ width: '80vw', height: '100px' }}>
            <Navbar data={data} setData={setData} />
          </div>
          <div
            className='maps'
            style={{
              width: '80vw',
              height: '100%',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            <Maps
              data={data}
              setData={setData}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
