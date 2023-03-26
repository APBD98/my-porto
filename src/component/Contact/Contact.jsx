import React from 'react'
import Images from '../Images/Images'


const Contact = () => {
  return (
    <div className='w-full h-[500px] pt-20 bg-gradient-to-r from-[#D3CCE3] to-[#E9E4F0] text-gray-900'>
        <h1 className='uppercase pt-10 text-2xl xl:text-3xl border-b-2 md:border-b-[3px] w-3/6 mx-auto border-slate-600 font-roboto text-center '>Contact</h1>
        <div className='w-full md:w-3/4 xl:w-1/2 md:mx-auto h-[300px] md:h-[250px] grid grid-cols-2 sm:grid-cols-1'>
          <div>
            <p className='text-xl font-roboto pt-20 sm:pt-10 pl-10 sm:pl-0 xl:pb-10 sm:text-center'>it's not perfect, but I have <span> <br /> potential</span></p>           
          </div>
          <div className='self-end pl-2 xl:pl-0 text-center'>
            <p className='text-xl mb-6 sm:mb-20'>Please, Contact me</p>
            
            <div className='flex justify-evenly sm:justify-center sm: gap-x-5 md:gap-x-10 lg:gap-x-15 xl:gap-x-20'>
              <a href="https://wa.me/+6285761102775" target="_blank" rel="noopener noreferrer"><img src={Images.whatsapp} alt="whatsapp" className='logoSize md:w-10 md:h-10' /></a>
              <a href="https://www.linkedin.com/in/azrai-putra-barumun-daulay-0067b5242/" target="_blank" rel="noopener noreferrer"><img src={Images.linkedin} alt="linkedin" className='logoSize md:w-10 md:h-10'/></a>
              <a href="https://www.instagram.com/azraiputradly/" target="_blank" rel="noopener noreferrer"><img src={Images.instagram} alt="instagram" className='logoSize md:w-10 md:h-10'/></a>
              <a href="https://github.com/APBD98" target="_blank" rel="noopener noreferrer"><img src={Images.github} alt="github" className='logoSize md:w-10 md:h-10'/></a>
            </div>           
          </div>
          
        </div>
    </div>
  )
}

export default Contact