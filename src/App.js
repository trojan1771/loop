import Login from './components/login.js'
import MainPage from './components/mainPage.js'
import { useState, useEffect } from 'react'
function App() {
  const [isLoggedin, setIsLoggedin] = useState(false)

  useEffect(() => {
    console.log(isLoggedin)
  }, [isLoggedin])

  return (
    <div>
      {isLoggedin === true ? (
        <MainPage />
      ) : (
        <Login setIsLoggedin={setIsLoggedin} />
      )}
    </div>
  )
}

export default App
