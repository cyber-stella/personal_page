import { useState } from 'react'

const PhotoCard = ({ photo }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="break-inside-avoid">
      <img
        src={photo.src}
        alt={`Photo ${photo.id}`}
        className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
        loading="lazy"
      />
    </div>
  )
}

export default PhotoCard 