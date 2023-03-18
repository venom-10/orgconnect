import React from 'react'
import img from '../images/404.svg'

export default function Error() {
  return (
    <>
      <div className="flex justify-center items-center bg-custom_white w-screen h-screen">
        <img className="w-screen h-screen" src={img} alt="404" />
      </div>
    </>
  )
}
