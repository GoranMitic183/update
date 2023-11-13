import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { deleteBlog, getBlogs } from "../../query/blogsQuery";
import classes from "./blog.module.css";
import EditBlog from "./editBlog.component";
import { useEffect } from "react";

export const Blog = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const storedToken = localStorage.getItem('token');

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
  
    if (storedToken) {
      try {
        const parsedToken = JSON.parse(storedToken);
        console.log(parsedToken);
  
        if (parsedToken && parsedToken.role === 1) {
          setIsAdmin(true);
        }  
      } catch (error) {
        console.error('Error parsing or checking token:', error);
      }
    }
  }, []);

  const { isPending , error, data, refetch } = useQuery({
    queryKey: ["getBlogsKey"],
    queryFn: () => getBlogs(),
  });

  const handleReadMore = (id) => {
    setIsReadMore(true);
    const blogId = data.blogs.find((blog) => blog._id === id);
    setSelectedBlog(blogId);
  };

  const handleBack = () => {
    setIsReadMore(false);
    setSelectedBlog(null);
    // setIsEdit(false);
  };

  const handleEditBlog = (id) => {
    setIsReadMore(false);
    const blogId = data.blogs.find((blog) => blog._id === id);
    setSelectedBlog(blogId);
    setIsEdit(true);
  }

  const handleDeleteBlog = (id) => {
    deleteBlog(id)
  }

  const handleEditBack = () => {
    setIsEdit(false)
  }

  return (
    <div className={classes.container} style={{opacity: "0.9", borderRadius: "0.5rem"}}>
      {isPending && <p>Pending...</p>}
      {error && <p>Blogs not found!</p>}
      {data && !isEdit &&
        !isReadMore &&
        data.blogs.map((blog) => {
          return (
            <div key={blog._id}>
              <div>
                <h2>{blog.title}</h2>
                <p>{blog.description}</p>
              </div>
              <button className="btn btn-secondary" style={{marginRight: "0.5rem"}} onClick={() => handleReadMore(blog._id)}>
                Read more...
              </button>
              {isAdmin && <button className="btn btn-secondary" style={{marginRight: "0.5rem"}} onClick={() => handleEditBlog(blog._id)}>Edit</button>}
              {isAdmin && <button className="btn btn-secondary" style={{marginRight: "0.5rem"}} onClick={() => handleDeleteBlog(blog._id)}>Delete</button>}
              <hr></hr>

            </div>
            
          );
        })}
      {selectedBlog && isReadMore && (
        <div>
          <div>
            <h2>{selectedBlog.title}</h2>
            <p>{selectedBlog.content}</p>
          </div>
          <button className="btn btn-dark" style={{marginRight: "0.5rem"}} onClick={handleBack}>Back</button>
          {isAdmin && <button className="btn btn-dark" style={{marginRight: "0.5rem"}} onClick={() => handleEditBlog(selectedBlog._id)}>Edit</button>}
          {isAdmin && <button className="btn btn-dark" style={{marginRight: "0.5rem"}} onClick={() => handleDeleteBlog(selectedBlog._id)}>Delete</button>}
        </div>
      )}
      {isEdit && <EditBlog props={selectedBlog} onBack={() => handleEditBack}/>}
      <div>
        
      </div>
    </div>
  );
};
