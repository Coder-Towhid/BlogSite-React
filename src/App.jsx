import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog/Blog'
import Home from './pages/Home/Home'
function App() {


  return (
    <div className='container'>

      <BrowserRouter>
      
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/blog/:id" element={<Blog/>} />
       
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
