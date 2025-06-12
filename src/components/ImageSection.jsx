const ImageSection = () => {
  return (
    <div className="w-full xl:w-[50%] h-screen items-center justify-center xl:block hidden">
      <div className="w-full h-full overflow-hidden relative">
        <img
          src="/io-bn.jpg"
          alt="io"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 opacity-80"
        />
      </div>
    </div>
  )
}

export default ImageSection