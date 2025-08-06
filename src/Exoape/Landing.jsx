import React from 'react'
import {easeInOut, easeOut, motion} from "framer-motion"

function Landing() {
  return (
    <div className='relative w-full h-[150vh] sm:h-[250vh]  '>
        <div className='picture w-[100%]  h-[150vh]  sm:h-[250vh] overflow-hidden '> 
            <img data-scroll data-scroll-speed="-1" className=' w-full h-full  object-cover object-top ' src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)" alt="" />
        </div>
        
        <div className='w-full h-full absolute top-0 '>
          <div className='text max-w-screen-lg mx-auto px-5 text-white '>
            <div className='para mt-72 sm:mt-[22rem]'>
              {["Global digital design studio partnering",
                "with brands and businesses that create",
                "exceptional experiences with people",
                "live, work, and unwind."].map((item, index)=>{
                  return(
                    <p className='text-lg sm:text-xl masker overflow-hidden '>
                      <motion.span 
                        initial={{rotate:70, y:"100%",opacity:0}}
                        animate={{rotate:0, y:"0%", opacity:1}}
                        transition={{ease:easeOut, duration:0.8, delay:index * 0.2}}
                        className='inline-block origin-left'>
                        {item}
                      </motion.span>
                    </p>
                  )
              })}
              
            </div>

            <div className='headings '>
              {["Digital", "Design", "Experience"].map((item, index) =>{
                return (
                    <h1 className='text-6xl tracking-tighter sm:leading-[16rem] sm:text-[12rem] masker overflow-hidden'>
                      <motion.span
                      initial={{rotate:70, y:"100%",opacity:0}}
                      animate={{rotate:0, y:"0%", opacity:1}}
                      transition={{ease:easeOut, duration:0.8, delay: 1+index * .15}}
                      className='inline-block origin-left '>
                        {item}
                      </motion.span>
                    </h1>)
              })}
              
            </div>

            <div className='para2 mt-10 sm:w-2/5 sm:text-lg'>
              <p>
                We help experience driven companies thrive by making their audience
                feel the refined intricacies of their brand and product in the 
                digital space. Unforgettable journies start with a click.
              </p>
              <a href="#" className='sm:text-lg sm:border-b-[1px] border-b-[.3px] border-zinc-100  inline-block mt-8'>The Studio</a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Landing