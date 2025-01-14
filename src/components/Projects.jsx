import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Tracking POO POO',
    image: '/personal_page/projects/poopoo.webp',
    technologies: 'HTML / CSS / Python',
    link: 'https://github.com/yourusername/poopoo'
  },
  {
    title: 'FoodSilo',
    image: '/personal_page/projects/foodsilo.jpeg',
    technologies: 'React / Tailwind / Next.js',
    link: 'https://github.com/yourusername/foodsilo'
  },
  {
    title: 'YOLO-8',
    image: '/personal_page/projects/yolo.webp',
    technologies: 'JavaScript / Flask / YOLOv8 / Jenkins',
    link: 'https://github.com/yourusername/yolo-8'
  }
]

const Projects = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white ml-2">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 