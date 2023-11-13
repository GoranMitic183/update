import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { editBlog } from "../../query/blogsQuery";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../query/blogsQuery";
import { useNavigate } from "react-router-dom";

const EditBlog = ({ ...props }, handleEditBack) => {

  const oldBlog = Object.values(props);
  const navigate = useNavigate()


  const [formData, setBlogData] = useState({
    id: oldBlog[0]._id,
    title: oldBlog[0].title,
    description: oldBlog[0].description,
    content: oldBlog[0].content,
  });

  console.log(formData);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData({ ...formData, [name]: value });
  };

  const { isPending, error, data, mutate } = useMutation({
    mutationKey: ["editBlog"],
    mutationFn: editBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getBlogsKey"] });
      navigate("/home")
    },
  });

  const handleEditBlog = (e) => {
    e.preventDefault();
    mutate(formData);
  };

  return (
    <div>
      <div>
        <div>
          <div
            style={{
              margin: "auto",
              padding: "15px",
              maxWidth: "450px",
              alignContent: "center",
              marginTop: "0.5rem",
            }}
          >
            <MDBCard alignment="center" style={{ opacity: "0.8" }}>
              <MDBIcon fas icon="user-circle" className="fa-2x" />
              <h5>Edit blog</h5>
              <MDBCardBody>
                <MDBValidation
                  onSubmit={handleEditBlog}
                  noValidate
                  className="row g-3"
                >
                  <div className="col-md-12">
                    <MDBInput
                      label="Title"
                      type="text"
                      value={formData.title}
                      name="title"
                      onChange={handleInputChange}
                      required
                      // invalid
                      validation="Please provide title"
                    />
                  </div>
                  <div className="col-md-12">
                    <MDBInput
                      label="Description"
                      type="text"
                      value={formData.description}
                      name="description"
                      onChange={handleInputChange}
                      required
                      // invalid
                      validation="Please provide description"
                    />
                  </div>

                  <div className="col-md-12">
                    <MDBInput
                      placeholder="Enter your content here..."
                      cols="35"
                      label="Content"
                      type="text"
                      value={formData.content}
                      name="content"
                      onChange={handleInputChange}
                      required
                      // invalid
                      validation="Please provide content"
                    />
                  </div>

                  <div className="col-12">
                    <MDBBtn className="btn btn-dark mt-2" style={{marginRight: "0.5rem", width: "100%"}} >
                      Edit
                    </MDBBtn>
                    
                  </div>
                </MDBValidation>
                <MDBBtn className="btn btn-secondary mt-2" style={{marginRight: "0.5rem", width: "100%"}} onClick={() => handleEditBack} >
                      Back
                    </MDBBtn>
                {isPending && <p>Pending...</p>}
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBlog;
