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
        Web Developer;<br />
        Amateur Photographer;<br />
        Life Lover.
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
      <div className="flex justify-center space-x-6 min-w-[200px]">
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:-translate-y-1 dark:hover:text-white transition-colors">
          <FaEnvelope />
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:-translate-y-1 dark:hover:text-white transition-colors">
          <FaGithub />
        </a>
        <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:-translate-y-1 dark:hover:text-white transition-colors">
          <FaLinkedin />
        </a>
      </div>
    </div>
  )
}

export default Profile 