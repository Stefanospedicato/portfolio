const RoundedImage = () => {
  return (
    <div className="border rounded-full overflow-hidden flex-shrink-0 xl:w-[50%] w-[250px] h-[250px] mb-5 xl:hidden">
      <img src="/public/io-bn.jpg" alt="io" className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-in-out hover:scale-110" />
    </div>
  )
}

export default RoundedImage