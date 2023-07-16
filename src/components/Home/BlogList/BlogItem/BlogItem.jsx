/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { Chip } from "../../../Common/Chip/Chip"
import './blogitem.css'


 const BlogItem = ({ blog:{
     
        id,
        description,
        title,
        createdAt,
        authorName,
        authorAvatar,
        category,
        cover
        
     }
}) => {
  return (
    <div className="blogItem-wrap">
        <img src={cover} alt="cover" className="blogItem-cover"/>
        <Chip lable={category}/>
        <h3>{title}</h3>
        <p className="blogItem-desc">{description}</p>
        <footer>
           <div className="blogItem-author">
            <img src={authorAvatar} alt='avatar'/>
            <div>
                <h6>{authorName}</h6>
                <p>c{createdAt}</p>
            </div>
           </div> 
           <Link to={`/blog/${id}`} className="blogItem-link">→</Link>
        </footer>

    </div>
  )
}

export default BlogItem