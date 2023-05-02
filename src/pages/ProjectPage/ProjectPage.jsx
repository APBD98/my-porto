import React, {useRef, useState, useEffect} from 'react'
import NavPage from '../../component/Navbar/NavPage'
import ProjectCard from '../../component/ProjectCard/ProjectCard'
import Images from '../../component/Images/Images'
import Contact from '../../component/Contact/Contact'

const ProjectPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const refTop = useRef(null)
  const scrollTop =() => {
    refTop.current?.scrollIntoView({behavior: 'smooth'});
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
    <div ref={refTop} className="w-full h-screen bg-gradient-to-r  from-[#0F2027] via-[#203A43] to-[#2C5364] text-white font-roboto relative">
      <NavPage/>
      <div className="content w-full absolute top-[150px]">
        <h1 className='text-2xl font-roboto text-center pt-5 mb-20 '>Not much, but I still improve</h1>
        <div className='w-full bg-gradient-to-r  from-[#0F2027] via-[#203A43] to-[#2C5364] flex flex-col justify-center items-center  gap-5 pb-20'>
        <ProjectCard 
            title={`Qur'an Web Applicaton`} 
            desc={"Created Qur'an using Next JS and Typescript. Available murothul audio and text translation in indonesian language."} 
            firstThumb={Images.quran} 
            secondThumb={Images.quran1} 
            code={'https://github.com/APBD98/Quran_APP'}
            height={'300px'}
            display={'none'}
          />

          <ProjectCard 
            title={'Todo list'} 
            desc={'React JS challenge by Devcode.gethired. Created web application to record a list of activities. Equipped with sorting menu'} 
            firstThumb={Images.newTodo1} 
            secondThumb={Images.newTodo2} 
            link={'https://todo-list-app-dbf8c.firebaseapp.com/'} 
            code={'https://github.com/APBD98/todolist-devcode'}
            height={'300px'}
          />

          <ProjectCard 
            title={'Gallery Books'} 
            desc={'Created website for searching your favorite books. Available Register pages and Login Pages. Using Firebase for authentication'} 
            firstThumb={Images.gallery1} 
            secondThumb={Images.gallery2} 
            code={'https://github.com/APBD98/gallery-books'}
            height={'300px'}
            display={'none'}
          />

          <ProjectCard 
            title={'Zaragoza'} 
            desc={'Created Landing Page. Website was Responsive in desktop and mobile version. Template by Zyro.com'} 
            firstThumb={Images.zaragoza1} 
            secondThumb={Images.zaragoza2} 
            link={'https://apbd98.github.io/zaragoza-landingpage/'} 
            code={'https://github.com/APBD98/zaragoza-landingpage'}
          />

          <ProjectCard 
            title={'Nadia Cafe'} 
            desc={'It is my slicing project again. Created Website Company profile. Website was Responsive in desktop and mobile version. Template by Zyro.com'} 
            firstThumb={Images.nadiaCafe1} 
            secondThumb={Images.nadiaCafe2} 
            link={'https://apbd98.github.io/'} 
            code={'https://github.com/APBD98/APBD98.github.io'}
          />

          <ProjectCard 
            title={'Camp Coffie'} 
            desc={'Again, My slicing project, Created Website Company profile using React js. Website was Responsive in desktop and mobile version.'} 
            firstThumb={Images.campCoffie1} 
            secondThumb={Images.campCoffie2}
            code={'https://github.com/APBD98/APBD98.github.io'}
            display={'none'}
          />    
        </div>
        <div>
          <Contact/>
        </div>
      </div>

      
      <button className={`${scrollPosition < 100 && 'hidden'} fixed bottom-5 right-10 md:right-14 lg:right-16 xl:right-20`} onClick={scrollTop}>
        <img src={Images.newArrow} alt="" className='w-8 h-8 animate-bounce'/>
      </button>
      
    </div>
  )
}

export default ProjectPage