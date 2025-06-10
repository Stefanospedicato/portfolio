const Homepage = () => {
  return (
    <section className="w-full md:flex justify-between md:items-center homepage-section">
      <div className="w-[50%]">
        <img src="/public/io-bn.jpg" alt="io" className="hidden lg:block w-[80%]" />
      </div>
      <div className="items-center ml-10">
        <p className="text-8xl w-[50%] font-bold mb-10">STEFANO SPEDICATO</p>
        <span className="block h-[10px] bg-black w-[300px] mb-5"></span>
        <button className="cool-button mt-10">CONTATTAMI</button>
      </div>
    </section>
  )
}

export default Homepage