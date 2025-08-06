import React from 'react'
//bg-[#070707]
function Story() {
  return (
    <div className='w-full h-[140vh]  mt-40 sm:mt-20  bg-[rgb(8,8,8)]'>

        <div className='max-w-screen-lg mx-auto h-full '>
            <div className='pt-10'>
                <h1 className='text-[rgb(224,204,187)] font-normal text-9xl' >Our <br /> Story</h1>
                <p className='text-[rgb(224,204,187)] text-2xl mt-10'>The story behind Exo Ape is one of <br />
                   exploration, creativity and curiosity.</p>
            </div>

            <hr className='border-[rgb(224,204,187)] mt-16 h-[2px]'/>


            <div className='flex gap-36 mt-16'>

                <h4 className='text-[rgb(224,204,187)] text-sm leading-7'>
                    Willem II Singel 8 <br />
                    6041 HS, Roermond <br />
                    The Netherlands <br />
                    hello@exoape.com</h4>

                <ul className='text-[rgb(224,204,187)]  text-sm leading-7'>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Studio</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>

                <ul className='text-[rgb(224,204,187)]  text-sm leading-7'>
                  <li><a href="#">Behance</a></li>
                  <li><a href="#">Dribble</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                </ul>

            </div>
        </div>


    </div>
  )
}

export default Story