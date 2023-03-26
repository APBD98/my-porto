import React from 'react'
import Images from '../Images/Images'


const Header = () => {

  return (
    <div className='h-screen w-full border-b-4 border-slate-700'>
      <div className="h-32 absolute top-44 xl:top-52 left-20 ">
        <h1 className='text-5xl xl:text-7xl'>Hi, I am <span className='animate-downfall'>Azrai</span> </h1>
        <h2 className='text-2xl xl:text-4xl text-slate-400 md:text-slate-600'>Frontend Developer</h2>
        <hr className='border-4 md:border-b-8 border-slate-700 md:border-slate-800'/>
        <p className='mt-7 text-lg'>I am a fresh graduated, looking for my first job.</p>
        <p className='w-96 xl:w-[600px] text-lg'>Have experince in slicing UI and created a responsive website for desktop and mobile version.</p>
      </div>
      <div className='uppercase absolute bottom-10 xl:bottom-20 xl:right-0 flex flex-col justify-center items-center w-full xl:w-1/2'>
        <h1 className='text-base border-b-2 border-slate-700 md:text-lg'>Skills</h1>
        <div className='flex justify-evenly w-3/4 mt-10'>
          <div className='group w-7 xl:w-9 h-7 xl:h-10 flex flex-col items-center justify-between'>
            <img src={Images.html} alt="html" className='logoSize xl:w-9 xl:h-10 group-hover:animate-bounce'/>
            <p className='hidden group-hover:inline pt-2 text-sm'>HTML</p>
          </div>
          <div className='group w-7 h-7 xl:w-9 xl:h-10 flex flex-col items-center justify-between'>
            <img src={Images.css} alt="css" className='logoSize xl:w-9 xl:h-10  group-hover:animate-bounce'/>
            <p className='hidden group-hover:inline pt-2  text-sm'>CSS</p>
          </div>
          <div className='group w-7 h-7 xl:w-9 xl:h-10 flex flex-col items-center justify-between'>
            <img src={Images.javascript} alt="javascript" className='logoSize xl:w-9 xl:h-10 group-hover:animate-bounce'/>
            <p className='hidden group-hover:inline pt-2 text-sm'>Javascript</p>
          </div>
          <div className='group w-7 h-7 xl:w-9 xl:h-10 flex flex-col items-center justify-between'>
            <img src={Images.bootstrap} alt="bootstrap css" className='logoSize xl:w-9 xl:h-10 group-hover:animate-bounce'/>
            <p className='hidden group-hover:inline pt-2 text-sm'>Bootstrap</p>
          </div>
          <div className='group w-7 h-7 xl:w-9 xl:h-10 flex flex-col items-center justify-between'>
            <img src={Images.react} alt="react js" className='logoSize animate-spin group-hover:animate-none xl:w-9 xl:h-10'/>
            <p className='hidden group-hover:inline pt-2 text-sm'>React</p>
          </div>
          <div className='group w-7 h-7 xl:w-9 xl:h-10 flex flex-col items-center justify-between'>
            <img src={Images.tailwind} alt="tailwind css" className='logoSize xl:w-9 xl:h-10 group-hover:animate-bounce'/>
            <p className='hidden group-hover:inline pt-2 text-sm'>Tailwind</p>
          </div>
        </div>
      </div>       
    </div>
  )
}

export default Header