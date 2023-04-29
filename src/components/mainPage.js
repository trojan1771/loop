import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Maps from './Maps'
import Data from '../data/data.js'
import { useState, useEffect } from 'react'

const MainPage = () => {
  const [data, setData] = useState([...Data])
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {}, [data, activeTab])

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
