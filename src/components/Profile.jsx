import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Profile = () => {
  const openResume = () => {
    window.open('resume.pdf', '_blank')
  }

  return (
    <div className="text-center space-y-6 w-full lg:w-auto flex-shrink-0 min-w-[300px]">
      <div className="min-w-full">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          SIYU(STELLA) CHEN
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-6">
          Graduate Student
        </h2>
      </div>
      
      <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed min-w-[200px]">
        ENTJ;<br />
        Tech Enthusiast;<br />
        Amateur Photographer;<br />
        Life Explorer.
      </p>
      
      <div className="min-w-[200px] flex justify-center">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold
                    transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 dark:focus:ring-white"
        >
          <HiOutlineDocumentText className="w-5 h-5 mr-2" />
          Resume
        </a>
      </div>
      <div className="flex justify-center space-x-8 min-w-[200px]">
        <a 
          href="mailto:systellade@gmail.com" 
          className="group transform-gpu"
          aria-label="Email"
        >
          <div className="relative p-2 transition-transform duration-300 ease-out hover:scale-110">
            <FaEnvelope className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white" />
            <div className="absolute inset-x-0 -bottom-1 flex justify-center">
              <div className="h-0.5 w-0 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </a>
        
        <a 
          href="https://github.com/cyber-stella" 
          className="group transform-gpu"
          aria-label="GitHub"
        >
          <div className="relative p-2 transition-transform duration-300 ease-out hover:scale-110">
            <FaGithub className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white" />
            <div className="absolute inset-x-0 -bottom-1 flex justify-center">
              <div className="h-0.5 w-0 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </a>
        
        <a 
          href="https://www.linkedin.com/in/stella-chen-49b89a24b" 
          className="group transform-gpu"
          aria-label="LinkedIn"
        >
          <div className="relative p-2 transition-transform duration-300 ease-out hover:scale-110">
            <FaLinkedin className="w-6 h-6 text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-900 dark:group-hover:text-white" />
            <div className="absolute inset-x-0 -bottom-1 flex justify-center">
              <div className="h-0.5 w-0 bg-gray-900 dark:bg-white transition-all duration-300 group-hover:w-full" />
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Profile 