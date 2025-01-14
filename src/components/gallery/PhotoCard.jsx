import { useState } from 'react'

const PhotoCard = ({ photo }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="break-inside-avoid mb-4">
      <div className="relative overflow-hidden rounded-xl shadow-lg group bg-gray-100 dark:bg-gray-800">
        <img
          src={photo.src}
          alt={photo.title}
          className={`w-full h-auto object-cover transition-all duration-300 group-hover:scale-105
                     ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-800 rounded-full animate-spin"></div>
          </div>
        )}
        <div className="absolute inset-0 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-xl font-medium text-white transform transition-all duration-300 
                        translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-0 px-4 text-center">
              {photo.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PhotoCard 