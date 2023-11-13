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
import { postNewBlog } from "../../query/blogsQuery";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../query/blogsQuery";

const NewBlog = () => {
  const [formData, setLoginData] = useState({
    title: "",
    description: "",
    content: ""
  });


  const mutation = useMutation({
    mutationKey: ["addBlog"],
    mutationFn: postNewBlog,
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['getBlogsKey']});
    }
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...formData, [name]: value });
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    mutation.mutate(formData)
  }

  return (
    <div style={{height:"25rem"}}>
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
          <MDBCard alignment="center" style={{ opacity: "0.9" }}>
            <MDBIcon fas icon="user-circle" className="fa-2x" />
            <h5>Add new blog</h5>
            <MDBCardBody>
              <MDBValidation
                onSubmit={handleAddBlog}
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
                  placeholder="Enter your text..."
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
                  <MDBBtn style={{ width: "100%" }} className="btn btn-secondary">
                    Add
                  </MDBBtn>
                </div>
              </MDBValidation>
            </MDBCardBody>
          </MDBCard>
        </div>
      </div>
    </div>
  );
};

export default NewBlog;
