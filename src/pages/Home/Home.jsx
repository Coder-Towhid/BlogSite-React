import { useState } from "react"
import { EmptyList } from "../../components/Common/EmptyList/EmptyList"
import BlogList from "../../components/Home/BlogList/BlogList"
import Header from "../../components/Home/Header/Header"
import SearchBar from "../../components/Home/SearchBar/SearchBar"
import { blogList } from "../../config/data"

const Home = ()=>{
    const [blogs, setBlogs] = useState(blogList)
    const [searchKey, setSearchKey] = useState('')

    const handleSearchSubmit = event=>{
        event.preventDefault()
        handleSearchResults()
    }

    const handleSearchResults = ()=>{
       const allBlogs =  blogList;
       const filteredBlogs =  allBlogs.filter(
            blog=> blog.category.toLowerCase().includes(searchKey.toLowerCase().trim()))  
       setBlogs(filteredBlogs)
    }

const handleClearSearch=()=>{
    setBlogs(blogList)
    setSearchKey('')
}

    return(
        <div>
          {/* page header */}
          <Header/>
          {/* search bar */}
          <SearchBar clearSearch={handleClearSearch} value={searchKey} formSubmit={handleSearchSubmit} handleSearchKey={e=>setSearchKey(e.target.value)}/>
          {/* blog list component & empty list */}
          {!blogs.length ? <EmptyList/> : <BlogList blogs={blogs}/> }
        </div>
    )
}  

export default Home