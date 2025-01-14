import PhotoCard from './gallery/PhotoCard'
import photos from './gallery/photoData'

const Gallery = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
          Snapshots
        </h2>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery 