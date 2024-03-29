import React from "react"
import SyncLoader from "react-spinners/SyncLoader";

function Loading() {

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-50 flex justify-center items-center px-[2rem]">
        <SyncLoader
            color={'#f4f4f4'}
            loading={true}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    </div>
  )
}

export default Loading;
