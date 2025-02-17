import React from 'react'
import useLocalStorage from './useLocalStorage'
import './theme.css'


function LightDarkMode() {

    const [theme,setTheme] = useLocalStorage('theme',"dark")

    function handleToggleTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    console.log(theme)

  return (
    <div className='light-dark-mode w-screen' data-theme={theme}>
      <div className="container">
        <p className='border text-center mb-2 rounded-sm w-max'>Hello World</p>
        <button onClick={handleToggleTheme} className='border p-2 rounded-md w-max'>Change Theme</button>
      </div>
    </div>
  )
}

export default LightDarkMode