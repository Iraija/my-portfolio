import React from "react"

function Modal({ darkModeState, setContactState }) {

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center px-[2rem]">
        <div className={`px-[2rem] ${darkModeState ? 'bg-dark-mode-B' : 'bg-light-mode-A'} rounded-lg shadow-lg`}>
          <div className="flex justify-end">
            <button onClick={() => setContactState(prevState => !prevState)} className="pt-3 text-lg"><i className="fa-solid fa-xmark"></i></button>
          </div>
          <div className="pb-5 text-xs md:text-base">
            <h1 className="text-2xl md:text-3xl font-bold">Contact Me</h1>
            <div className="py-2">
              <p className="text-sm md:text-lg font-bold py-2">Get in touch</p>
              <div className="py-2 px-4 flex flex-col gap-2">
                <p className="font-semibold">Want to get in touch? I'd love to hear from you. Here's how you can contact me.</p>
                <div className="flex gap-3">
                  <span><i className="fa-solid fa-envelope"></i></span><p>elijahbanguis700@gmail.com</p>
                </div>
                <div className="flex gap-3">
                  <span><i className="fa-solid fa-phone"></i></span><p>+639850988535</p>
                </div>
              </div>
            </div>
            <form action="" className="w-full font-semibold flex flex-col gap-3">
              <h1 className="font-bold text-sm md:text-lg">Send a message</h1>
              <div>
                <p>Name</p>
                <input required type="text" placeholder="Your name" className="w-full font-normal px-4 py-2 rounded-md"/>
              </div>
              <div>
                <p>Email</p>
                <input required type="text" placeholder="example@email.com" className="w-full font-normal px-4 py-2 rounded-md"/>
              </div>
              <div>
                <p>Message</p>
                <textarea required name="" id="" cols="30" rows="2" placeholder="Your message..." className="w-full font-normal px-4 py-2 rounded-md"></textarea>
              </div>
              <button className="w-full px-4 py-2 bg-gray-400 rounded-lg bg-opacity-25 hover:bg-opacity-50 duration-500">Send</button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Modal;
