import './index.css'
import Home from './pages/Dashboard/Home'
import ProjectPage from './pages/ProjectPage/ProjectPage';
import NavPage from './component/Navbar/NavPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
    <NavPage/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='project' element={<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
