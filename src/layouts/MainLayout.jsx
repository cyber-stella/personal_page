import ThemeToggle from '../components/ThemeToggle'
import Footer from '../components/Footer'

const MainLayout = ({ isDark, toggleTheme, children }) => {
  return (
    <div className="bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen w-full overflow-x-hidden flex flex-col">
      <div className="min-w-[360px] w-full flex-grow">
        <div className="container mx-auto px-4 min-h-screen max-w-7xl py-8">
          {children}
        </div>
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout 