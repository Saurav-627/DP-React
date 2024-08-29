import {BrowserRouter , Route , Routes} from 'react-router-dom'
import AllBlogs from './Blogs/AllBlogs/AllBlogs'
import SingleBlog from './Blogs/SingleBlog/SingleBlog'
import CreateBlogs from './Blogs/CreateBlogs/CreateBlogs'
import EditBlogs from './Blogs/EditBlogs/EditBlogs'
// import Cards from './Blogs/ComponentsBlog/Cards'
// import Home from './Pages/Home'
// import About from './Pages/About'
// import Contact from './Pages/Contact'

export const App = () => {
  return(

//   <BrowserRouter>

//   <Routes>
 
//  <Route path='/' element={<Home />} />
//  <Route path='/about' element={<About />} />
//  <Route path='/contact' element={<Contact />} />

//   </Routes>
  
//   </BrowserRouter>


    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AllBlogs />} />
      <Route path='/SingleBlog' element={<SingleBlog />}/>
      <Route path='/createBlog' element={<CreateBlogs />}/>
      <Route path='/editBlog' element={<EditBlogs />} />
    </Routes>
    </BrowserRouter>

    // <Cards />

  )


} 