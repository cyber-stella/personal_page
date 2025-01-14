import { useEffect, useState } from 'react'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'

function App() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <MainLayout isDark={isDark} toggleTheme={toggleTheme}>
      <Home />
    </MainLayout>
  )
}

export default App
