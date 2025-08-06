// ---------------------------------Exoape website-----------------------------------------

import React from 'react'
import Navbar from './Exoape/Navbar'
import Landing from './Exoape/Landing'
import Work from './Exoape/Work'
import Playreel from './Exoape/Playreel'
import Images from './Exoape/Images'
import Story from './Exoape/Story'
import LocomotiveScroll from 'locomotive-scroll'; 

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full h-full'>
        <Navbar/>
        <Landing/>
        <Work/>
        <Playreel/>
        <Images/>
        <Story/>
    </div>
  )
}

export default App