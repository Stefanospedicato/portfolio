import React from 'react'

const SquareImage = () => {
  return (
    <div className="rounded-none overflow-hidden flex-shrink-0 w-[500px] xl:h-[300px] mb-5 hidden xl:block">
      <img src="/io-bn.jpg" alt="io" className="w-full h-full object-cover opacity-80 transition-transform duration-500 ease-in-out hover:scale-110" />
    </div>
  )
}

export default SquareImage