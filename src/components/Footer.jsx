const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            © 2024 SIYU(STELLA) CHEN. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <i className="fab fa-github text-xl"></i>
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <i className="fab fa-linkedin text-xl"></i>
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 