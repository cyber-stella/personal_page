import Profile from '../components/Profile'
import Avatar3D from '../components/Avatar3D'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="animate-fade-in">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-20 lg:gap-80">
        <div className="lg:w-1/2 flex justify-end">
          <Profile />
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <Avatar3D />
        </div>
      </div>
      <Projects />
      <Gallery />
    </div>
  )
}

export default Home 