import Navigation from './components/Navigation'
import Feed from './components/Feed'
import Friends from './components/Friends'
import BottomNav from './components/BottomNav'
import { useState } from 'react'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode)
    document.documentElement.classList.toggle("dark", !darkMode);
  }

  return (
    <>
      <div className={`flex min-h-screen w-full items-center justify-center md:flex-row ${ darkMode ? "bg-black" : "bg-white"}`}>
        <main className="flex min-h-screen w-full">
          <Navigation toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Feed />
          <Friends />
          <BottomNav toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        </main>
      </div>
    </>
  )
}

export default App
