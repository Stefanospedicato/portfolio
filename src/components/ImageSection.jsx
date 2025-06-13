const ImageSection = () => {
  return (
    <div className="w-full xl:w-1/2 xl:h-screen hidden xl:block relative">
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/io-bn.jpg"
          alt="io"
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110 opacity-80"
        />
      </div>
    </div>
  );
};

export default ImageSection;