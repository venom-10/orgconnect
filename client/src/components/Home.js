import prf1 from '../images/prf2.svg'

export default function HomePage() {
  return (
    <>
      <div className="home flex  w-screen h-screen bg-custom_white">
        <div className="sidebar bg-custom_black basis-1/5 text-white">
          <h1 className="flex justify-center font-semibold my-8 text-xl">
            OrgConnect
          </h1>
          <div className="profile flex flex-col items-center">
            <img src={prf1} alt="" className='w-10 h-10'/>
          </div>
        </div>
        <div className="main_body bg-custom_white basis-4/5 flex flex-col">
          <div className="__nav basis-1/12 bg-red-400"></div>
          <div className="bg-indigo-600 basis-11/12 flex flex-row">
            <div className="body basis-3/4 bg-indigo-900"></div>
            <div className="sidebar bg-custom_black basis-1/4"></div>
          </div>
        </div>
      </div>
    </>
  );
}
