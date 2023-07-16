/* eslint-disable react/prop-types */
import BlogItem from './BlogItem/BlogItem'
import './bloglist.css'
// eslint-disable-next-line react/prop-types
const BlogList = ({blogs}) => {
  return (
    <div className="bloglist-wrap">
         {blogs.map(blog=> (
            <BlogItem blog={blog} key={blog.id} />
            ))}

    </div>
  )
}

export default BlogList