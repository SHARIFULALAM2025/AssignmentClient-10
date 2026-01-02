import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Authentication/Auth/AuthContext'
import { FaRegMoon } from 'react-icons/fa'
import { MdOutlineLightMode } from 'react-icons/md'
const DarkMode = () => {
  const { setTheme, theme } = useContext(AuthContext)
  useEffect(() => {
    const saveTheme = localStorage.getItem('theme') || 'light'
    setTheme(saveTheme)
    document.documentElement.classList.toggle('dark', saveTheme === 'dark')
  }, [setTheme])
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <div>
      <div className="">
        <button
          onClick={toggleTheme}
          className="rounded-full p-2 bg-purple-400 text-gray-600 hover:text-purple-400 transition-all ease-in-out shadow-md"
        >
          {theme === 'light' ? (
            <FaRegMoon className="w-5 h-5"></FaRegMoon>
          ) : (
            <MdOutlineLightMode className="w-5 h-5"></MdOutlineLightMode>
          )}
        </button>
      </div>
    </div>
  )
}

export default DarkMode
