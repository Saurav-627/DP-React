import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'

export const App = () => {
  return(

  <BrowserRouter>

  <Routes>
 
 <Route path='/' element={<Home />} />
 <Route path='/about' element={<About />} />
 <Route path='/contact' element={<Contact />} />

  </Routes>
  
  </BrowserRouter>

  )


} 