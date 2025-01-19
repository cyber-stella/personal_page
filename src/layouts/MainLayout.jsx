import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'

const MainLayout = ({ children, isDark, toggleTheme }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout 