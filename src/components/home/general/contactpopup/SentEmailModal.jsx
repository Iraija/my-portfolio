import React from "react"

function SentEmailModal({ darkModeState, setSentEmailState, sentState }) {

  const handledClose = () => {
    setSentEmailState(prevState => !prevState)
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center px-[2rem]">
      <div className={`px-[2rem] py-3 ${darkModeState ? 'bg-dark-mode-B' : 'bg-light-mode-A'} rounded-lg shadow-lg`}>
        <div className="flex justify-end">
          <button onClick={handledClose} className=" text-lg"><i className="fa-solid fa-xmark"></i></button>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex flex-col justify-center items-center">
            <div className={`h-32 w-32 mb-3 text-7xl text-light-mode-A flex justify-center items-center ${sentState ? 'bg-green-500' : 'bg-red-500'} rounded-full`}>
              {sentState ? <i className="fa-solid fa-check"></i> : <i className="fa-solid fa-xmark"></i>}
            </div>
            <p className="font-semibold text-xs md:text-base">Your message has been sent</p>
            <p className="font-bold text-md md:text-2xl">{sentState ? 'SUCCESSFULLY!' : 'UNSUCCESSFULLY!'}</p>
          </div>
          <button onClick={handledClose} className="w-full px-4 py-2 bg-gray-400 bg-opacity-30 hover:bg-opacity-50 duration-500 text-xs md:text-base rounded-md font-bold text-light-mode-B">OK</button>
        </div>
      </div>
    </div>
  )
}

export default SentEmailModal;
