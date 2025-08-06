import React from 'react'

function Images() {
  return (
    <div className='w-full h-[80vh] sm:h-[210vh] flex flex-col  items-center justify-center mt-44 mb-10'>
        <div className='w-[40%] h-[47%] sm:w-[26%] sm:h-[97%]  relative'>
            <img className='w-full h-full object-cover' 
                src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
            
            <div className='w-16 h-24 sm:w-36 sm:h-52 absolute left-[101%] top-[10%] overflow-hidden'>
                <img className='w-full h-full object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' 
                src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
            </div>

            <div className='w-[80%] h-20 sm:w-80 absolute right-[85%] top-[35%]'>
                <video autoPlay muted loop className='w-full aspect-video object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' 
                    src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4">
                </video>
            </div>

            <div className='w-32 h-20 sm:w-80 sm:h-52 absolute right-[106%] top-[90%]'>
                <img className='w-full h-full object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' 
                src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
            </div>

            <div className='w-[80%] h-[55%] sm:w-80 absolute sm:left-[106%] left-[90%] top-[90%]'>
            <video autoPlay muted loop className='w-full aspect-square object-cover absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' 
                    src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4">
                </video>
            </div>
        </div>

        <div className='w-full flex justify-center gap-2 items-center mt-40 '>
            <svg 
                viewBox="0 0 12 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg" 
                className="icon w-3" 
                data-v-669b4a84="">
                <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84="">                    </path>
            </svg>
            <h3 className='font-semibold text-xs'>Work In Motion</h3>
        </div>

        <div className='w-full text-center mt-10 '>
            <h1 className='sm:text-9xl tracking-tighter text-5xl '>Spread</h1>
            <h1 className='sm:text-9xl tracking-tighter text-5xl '>the News</h1>
        </div>

        <div className='sm:w-1/3 w-72  text-center mt-10'>
            <p className='text-xl '>Find out more about our work on these
            leading design and technology platforms.</p>
        </div>

        <div className='w-full text-center mt-10'>
              <a href="#" className='border-b-[1.5px] border-zinc-400'>Browse all News</a>
        </div>
    </div>
  )
}

export default Images