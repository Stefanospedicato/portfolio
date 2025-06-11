import { Link } from "react-router-dom"
import ImageSection from "../components/ImageSection"
const Homepage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen pt-20 xl:flex-row xl:justify-between homepage-section gap-10">

      <ImageSection />

      <div className="w-full xl:w-[50%] flex flex-col items-center text-center justify-center overflow-auto p-3">
        <p className="text-8xl font-bold mb-10 xl:text-9xl flex-shrink-0">STEFANO SPEDICATO</p>
        <div className="mb-5">
          <span className="text-4xl text-gray-400">Creative</span>
          <span className="text-4xl font-semibold"> Junior Developer</span>
        </div>
        <span className="block h-[10px] bg-black w-[100px] mb-5 transition-all duration-500 ease-in-out hover:w-[500px] rounded mx-auto"></span>
        <div className="w-full max-w-md">
          <Link to={"/about"}><button className="cool-button mt-10 w-full">INFO</button></Link>
          <Link to={"/progetti"}><button className="cool-button mt-10 w-full">PROGETTI</button></Link>
          <Link to={"/contatti"}><button className="cool-button mt-10 w-full">CONTATTAMI</button></Link>
        </div>
      </div>
    </section>

  )
}

export default Homepage