import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Maps from './Maps'

const MainPage = () => {
  return (
    <>
      <div className='main' style={{ display: 'flex', padding: '10px' }}>
        <div className='sidebar' style={{ height: '100vh', width: '20vw' }}>
          <Sidebar />
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
            <Navbar />
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
            <Maps />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
