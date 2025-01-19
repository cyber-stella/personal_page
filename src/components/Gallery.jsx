import photos from './gallery/photoData'

const Gallery = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white ml-2">
        Gallery
      </h2>
      <div className="masonry masonry-sm masonry-md">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} {...photo} />
        ))}
      </div>
    </section>
  )
}

const PhotoCard = ({ src, id }) => (
  <div className="break-inside-avoid mb-6">
    <img
      src={src}
      alt={`Photo ${id}`}
      className="w-full rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
      loading="lazy"
    />
  </div>
)

export default Gallery 