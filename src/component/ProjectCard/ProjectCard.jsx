import React from 'react'

const ProjectCard = ({display, height,
  title, 
  desc, 
  firstThumb, 
  secondThumb, 
  link,
  code }) => {
  return (
    <div className='w-[90%]  bg-gray-50 rounded-xl p-5  grid grid-cols-1 lg:grid-cols-2 gap-2 font-poppins  border-b-2 border-slate-700'>
      <div className='w-full h-[150px] text-slate-400 flex flex-col sm:text-center lg:text-left lg:justify-end'>
          <h1 className='text-2xl lg:text-4xl uppercase text-slate-700 font-semibold '>{title}</h1>
          <p className='lg:text-xl'>{desc}</p>
      </div>
      <div className='aspect-[3/4] w-full h-full ' style={{height:height}}>
        <img src={firstThumb} alt="first thumbnail" className='border-2 shadow-lg shadow-gray-300' />
      </div>
      <div className='aspect-[3/4] w-full h-full ' style={{height:height}} >
        <img src={secondThumb} alt="second thumbnail " className='border-2 shadow-lg shadow-slate-300'/>
      </div>
      <div className='w-full h-[100px] bg-white text-center'>
        <button className={`w-28 md:w-32 h-10 md:h-14 rounded md:rounded-md bg-sky-500 hover:bg-sky-400 border-2 mx-auto`} style={{display:display}}><a href={link} target="_blank" rel="noopener noreferrer">Live Demo</a></button>
        <button className='w-32 md:w-32 h-10 md:h-14 rounded md:rounded-md bg-gray-800 hover:bg-gray-500 border-2 mx-auto'><a href={code} target="_blank" rel="noopener noreferrer">Source Code</a></button>
      </div>
        

    </div>
  )
}

export default ProjectCard