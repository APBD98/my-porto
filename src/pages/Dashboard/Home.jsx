import React from 'react'
import Contact from '../../component/Contact/Contact'
import Header from '../../component/Header/Header'

const Home = () => {

  
  return (
    <div className="w-full min-h-[800px] bg-gradient-to-r  from-[#0F2027] via-[#203A43] to-[#2C5364] text-white font-roboto">
      <Header/>
      <Contact/>
    </div>
  )
}

export default Home