import ImageSection from "../components/ImageSection"
const Contacts = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-screen pt-20 xl:flex-row xl:justify-between homepage-section overflow-y-auto gap-10">
      <ImageSection />
      <div className="w-full flex flex-col items-center text-center xl:w-[50%] justify-center xl:mr-10">
        <p className="text-8xl font-bold mb-10 xl:text-9xl ">CONTATTAMI</p>
        <div className="mb-5">
          <span className="text-4xl text-gray-400">Creative</span>
          <span className="text-4xl font-semibold"> Junior Developer</span>
        </div>
        <span className="block h-[10px] bg-black w-[100px] mb-5 transition-all duration-500 ease-in-out hover:w-[500px] rounded mx-auto"></span>
        <div className="w-full max-w-md">

        </div>
      </div>
    </section>
  )
}

export default Contacts