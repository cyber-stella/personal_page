import { FiSun, FiMoon } from 'react-icons/fi'
import { IoRocketOutline } from 'react-icons/io5'

const ThemeToggle = ({ isDark, toggleTheme }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const buttonClasses = "p-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 transition-all duration-300 shadow-lg hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white"

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-3">
      <button
        onClick={scrollToTop}
        className={buttonClasses}
        aria-label="Scroll to top"
      >
        <IoRocketOutline className="w-5 h-5" />
      </button>
      <button
        onClick={toggleTheme}
        className={buttonClasses}
        aria-label="Toggle theme"
      >
        {isDark ? (
          <FiSun className="w-5 h-5" />
        ) : (
          <FiMoon className="w-5 h-5" />
        )}
      </button>
    </div>
  )
}

export default ThemeToggle 