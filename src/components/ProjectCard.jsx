const ProjectCard = ({ image, title, technologies, link = "#" }) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group relative overflow-hidden rounded-xl transition-all duration-300 
                shadow-lg hover:-translate-y-2 
                hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)]
                transform perspective-1000 bg-white dark:bg-gray-800
                dark:shadow-[0_10px_20px_-15px_rgba(0,0,0,0.5)]"
    >
      <div className="aspect-[4/3] w-full">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent 
                    opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="absolute bottom-0 p-6 text-white">
          <h3 className="text-xl font-bold transform transition-all duration-300 group-hover:translate-x-3">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-300 transform transition-all duration-300 group-hover:translate-x-3">
            {technologies}
          </p>
          <div className="mt-4 transform translate-y-4 opacity-0 transition-all duration-300 
                        group-hover:translate-y-0 group-hover:opacity-100">
            <span className="inline-flex items-center text-sm font-semibold tracking-wide">
              SEE MORE
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard 