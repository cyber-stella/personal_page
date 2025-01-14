import Profile from '../components/Profile'
import Avatar3D from '../components/Avatar3D'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'

const Home = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-80">
        <div className="lg:w-1/2 flex justify-end">
          <Profile />
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <Avatar3D />
        </div>
      </div>
      <Projects />
      <Gallery />
    </>
  )
}

export default Home 