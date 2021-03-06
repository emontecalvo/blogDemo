import React from 'react';

const publishedBlogs = ({blogs, removeBlogPost, editBlogStart}) => {

  return (
    <ul>
      {blogs.map((blog, index) => {
        return <div key={index}>
        		<li>{blog.title}</li>
        			<ul>
		        		<li>{blog.content}</li>
		        		<li>{blog.tags}</li>
		        	</ul>
		        	<button onClick={() => editBlogStart(blog)}>edit</button>
		        	<button onClick={() => removeBlogPost(blog)}>remove</button>
             </div>;
      })}
    </ul>
  )

}

module.exports = publishedBlogs;
