import React from 'react'
import { useState } from 'react'
import logo from '../assets/logo.jpeg'

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <div
        style={{
          boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.5)',
          background: 'white',
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
        <img src={logo} alt='jajsd bsd adssjda' width='220px' />
        <div
          className='Home_button'
          onClick={() => setActiveTab('home')}
          style={{
            height: '40px',
            width: '100%',
            marginTop: '80px',

            borderBottom: 'solid',
            backgroundColor: activeTab === 'home' ? '#F7BE6D' : 'white',
            borderColor: activeTab === 'home' ? '#F05E16' : 'black',
            color: activeTab === 'home' ? 'white' : 'black',
            '&:hover': {
              fontSize: '40px',
              background: 'white',
              color: '#F05E16',
            },
          }}
        >
          <h3>HOME</h3>
        </div>
        <div
          className='Bookmarked_Restraunts'
          onClick={() => setActiveTab('bookmarked')}
          style={{
            justifyContent: 'center',
            height: '90px',
            width: '100%',
            marginTop: '80px',

            borderBottom: 'solid',
            color: activeTab === 'bookmarked' ? 'white' : 'black',
            backgroundColor: activeTab === 'bookmarked' ? '#F7BE6D' : 'white',
            borderColor: activeTab === 'bookmarked' ? '#F05E16' : 'black',
          }}
        >
          <h3>BOOKMARKED RESTRAUNTS</h3>
        </div>
      </div>
    </>
  )
}

export default Sidebar
