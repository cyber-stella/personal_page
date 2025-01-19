import { useState } from 'react'

const PhotoCard = ({ photo }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="break-inside-avoid mb-4">
      <div className="relative overflow-hidden rounded-lg group">
        <img
          src={photo.src}
          alt={`Photo ${photo.id}`}
          className="w-full rounded-lg shadow-md transition-all duration-500 ease-out group-hover:shadow-xl group-hover:scale-[1.02]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-10" />
      </div>
    </div>
  )
}

export default PhotoCard 