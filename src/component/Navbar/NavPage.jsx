import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import arrow from '../../assets/left-chevron.png'

const NavPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isOn, setIsOn] = useState(false)
  const handleNav = () =>{
    if(isOn === false){
      setIsOn(true)
    }else{
      setIsOn(false)
    }
  }
  useEffect(() => {
    const handleScroll = event => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

  

  return (
    <div className={`${scrollPosition > 50 && 'sm:fixed sm:border-b-2 sm:border-slate-700 sm:bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] z-50 sm:shadow-lg shadow-slate-600'} w-full h-32 md:h-36 mx-auto flex flex-col justify-between items-center font-poppins absolute top-0 `} 
    >
      <div className='flex'>
        <h1 className='logo text-5xl md:text-6xl text-slate-100 pt-3'>Az</h1>
        <button className={`${isOn?'rotate-90':'-rotate-90'} w-[20px] h-[20px] ml-3 sm:hidden self-center mt-8 transition-all duration-700`} onClick={handleNav}>
          <img src={arrow} className='w-[15px] h-[15px] ' />
        </button>
      </div>
        
        <nav className={`${isOn?'flex':'hidden'} w-3/4 justify-evenly text-base md:text-lg xl:text-xl mx-auto text-slate-100 sm:flex sm:pb-3`} >
            <NavLink to="/" className={({ isActive }) =>
            isActive ? 'text-slate-400' : 'text-slate-100 hover:text-gray-400 hover:border-b-2 hover:border-slate-600 hover:scale-110 hover:transition'
            }
            >Home</NavLink>
            <NavLink to="/project" className={({ isActive }) =>
          isActive ? 'text-slate-400' : 'text-slate-100 hover:text-gray-400 hover:border-b-2 hover:border-slate-600 hover:scale-110 hover:transition'
          }>Project</NavLink>
        </nav>
    </div>
  )
}

export default NavPage