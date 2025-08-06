import React from 'react'

function Playreel() {
  return (
    <div className='w-full h-screen overflow-hidden relative bg-black'>
        <div className='w-40 sm:w-80 overflow-hidden aspect-video absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <video autoPlay muted loop className='w-full h-full scale-[2.5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
        </div>
        <div className='overlay absolute w-full h-full  py-20 text-white flex flex-col justify-between items-center'>
            <div className='w-full flex justify-center gap-2 items-center '>
                <svg 
                    viewBox="0 0 12 12" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="icon w-4" 
                    data-v-669b4a84="">
                    <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84="">
                    </path>
                </svg>
                <h3 className='font-semibold text-md text-zinc-300'>Work In Motion</h3>
            </div>
            
            <h1 className='w-full flex justify-center gap-32 sm:gap-96 items-center'>
                <div className='text-4xl sm:text-9xl '>Play</div>
                <div className='text-4xl sm:text-9xl '>Reel</div>
            </h1>

            <p className='text-center px-10 text-sm sm:w-1/3'>
                Our work is best experienced in motion. 
                Don’t forget to put on your headphones.
            </p>
        </div>
    </div>
  )
}

export default Playreel