import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

function PostCard({ posts, handleDeletePost, setUpdatedPost }) {
  const navigate = useNavigate();
  const postItems = posts.map((postObject, index) => {
    function handleDeleteClick() {
      fetch(`/posts/${postObject.id}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          r.json().then((post) => handleDeletePost(post));
        }
      });
    }

    return (
      <div key={index}>
        <MDBCard className="ms-5 me-5 mb-6 mt-5">
          <MDBRow className="g-0">
            <MDBCol className="text-center" md="4">
              <MDBCardImage
                src={postObject.img_url}
                alt="..."
                fluid
                style={{ padding: "10%", height: "65%" }}
              />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody className="ms-5 me-5 mb-6 mt-2">
                <MDBCardTitle style={{ fontSize: 40 }}>
                  {postObject.title}
                </MDBCardTitle>
                <MDBCardSubTitle>{postObject.date}</MDBCardSubTitle>
                <MDBCardText>{postObject.description}</MDBCardText>
                <MDBCardSubTitle>
                  {postObject.categories.map((category) => (
                    <li className="cat-desc" key={uuidv4()}>
                      {category.description}
                    </li>
                  ))}
                </MDBCardSubTitle>
                <div>
                  <em>Comments</em>
                </div>
                <ul>
                  <MDBCardText>
                    {postObject.user_post_comments.map((user_post_comment) => (
                      <small className="text-muted" key={uuidv4()}>
                        {user_post_comment.comment}
                        <hr />
                      </small>
                    ))}
                  </MDBCardText>
                </ul>

                <MDBBtn
                  className="mb-4 px-5 mx-5 w-10"
                  color="info"
                  size="sm"
                  onClick={handleDeleteClick}
                >
                  {" "}
                  Delete{" "}
                </MDBBtn>
                <MDBBtn
                  className="mb-4 px-5 mx-5 w-10"
                  color="info"
                  size="sm"
                  onClick={() => {
                    setUpdatedPost({ ...postObject });
                    navigate("/posts/edit");
                  }}
                >
                  {" "}
                  Update{" "}
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </div>
    );
  });

  return (
    <div className="post-card">
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/eucalyptus-silver-dollar-white-marble-banner_53876-129661.jpg?w=2000)",
          height: "200px",
        }}
      ></div>
      {postItems}
    </div>
  );
}

export default PostCard;
