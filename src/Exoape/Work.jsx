import React from 'react'
import {motion} from "framer-motion"

function Work() {
  return (
    <div className='w-full relative'>
        <div className='max-w-screen-lg mx-auto px-5 sm:px-10 py-10 '> 

          <h1 className='text-5xl mt-8 sm:text-[13rem] tracking-tighter sm:ml-8 mb-16'>
            <motion.span 
              initial={{rotate:90, y:"50%", opacity:0}} 
              whileInView={{rotate:0, y:"0", opacity:1}}
              transition={{
                ease:[0.22, 1, 0.36, 1],
                duration:1,
                delay:0.2
              }}
              className='inline-block origun-left'>
              Work
            </motion.span>
          </h1>

          <div className='outerdiv w-full  sm:flex'>
            <div className='sm:w-3/5 w-full'>
              <div className='video w-full sm:h-[100vh] h-[60vh] relative overflow-hidden'>
                  <img  className=' sm:block w-full h-full object-cover' src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)" alt="" />
                  <video autoPlay muted loop className=' hidden  w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://player.vimeo.com/progressive_redirect/playback/1001982172/rendition/720p/file.mp4?loc=external&log_user=0&signature=b92eb1ab8119f2ffaaa03f075ef271714f5ee63065ee8d29f4e188ce30202de0"></video>
              </div>
            </div>
            <div className='sm:w-2/5 w-full p-4 mt-10 sm:p-5 sm:ml-20'>
                <div className='w-full'>
                  <div className='featured sm:flex gap-2'>
                    <svg 
                      viewBox="0 0 12 12" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="icon w-4" 
                      data-v-669b4a84="">
                      <path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path>
                    </svg>
                    <h3 className='text-md'>Featured Projects</h3>
                  </div>
                    <p className='para text-xl mt-10 leading-tight text-justify'>
                      Highlights of the cases that we
                      passionately built with forward-thinking
                      clients and friends over the years.
                    </p>
                  
                  <div className='w-full mt-10 h-[60vh]'>
                    <img  className='sm:mt-40  sm:block w-full h-full sm:h-96 object-cover' src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)" alt="" />
                    <video autoPlay muted loop className='hidden  w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
                  </div>
                </div>
              </div>
          </div>

          {/* div-2 */}

          <div className='outerdiv2 w-full  sm:flex gap-36 px-2 '>
            <div className='sm:w-3/12 w-full sm:h-80 h-[60vh]'>
              <div className='w-full sm:mt-96 mt-8 h-full '>
                    <img  className='  sm:block w-full h-full sm:h-72 object-cover' src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)" alt="" />
                    <video autoPlay muted loop className='hidden  w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
                </div>
            </div>

            <div className='sm:w-7/12 w-full sm:h-[90vh] h-[60vh] '>
            <div className='w-full mt-10 h-full'>
                    <img  className='  sm:block w-full h-full sm:h-[90vh] object-cover' src="https://a.storyblok.com/f/133769/2409x3000/cfd16e1a58/cambium-carbon-hero.jpg/m/1300x1619/filters:quality(90)" alt="" />
                    <video autoPlay muted loop className='hidden  w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src="https://player.vimeo.com/progressive_redirect/playback/927016456/rendition/720p/file.mp4?loc=external&log_user=0&signature=270ce5ba6bf44a717c74cf85de5f3de1d33a36ba5205b660e5e23b873199d71a"></video>
                </div>
            </div>
          </div>

          {/* <div className='elems mt-10 '>
            {elems.map((item,index)=>{
              return <div key={index} className='elem w-full mt-14'>
                        <div className='video w-full h-[104vw] relative overflow-hidden'>
                            <img  className='hidden sm:block w-full h-full object-cover' src={item.image} alt="" />
                            <video autoPlay muted loop className='block sm:hidden w-full h-full scale-[1.2] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]' src={item.video}></video>
                        </div>

                        <div className='mt-2'>
                          <h3  className='font-semibold'>{item.heading}</h3>
                          <h3 className='opacity-50 font-semibold'>{item.subheading}</h3>
                        </div>
                    </div>
            })}
          </div> */}
            <div className='mt-40 text-end mr-10'>
              <a href="#" className='border-b-[2px] border-zinc-300'>Browse all Work</a>
            </div>
        </div>
        
        
    </div>
  )
}

export default Work