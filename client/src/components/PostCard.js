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
  MDBCardLink,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

function PostCard({
  posts,
  handleDeletePost,
  setUpdatedPost,
  handleUpdatePost,
}) {
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

    // function handleUpdateClick() {
    //   const updateObj = {
    //     title: posts.title,
    //     description: posts.description,
    //   };
    //   fetch(`/posts/${postObject.id}`, {
    //     method: "PATCH",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(updateObj),
    //   })
    //     .then((r) => r.json())
    //     .then((updatedPost) => handleUpdatePost(updatedPost));
    // }

    // <MDBCard>
    //   <MDBCardBody>
    //     <MDBCardTitle>Card title</MDBCardTitle>
    //     <MDBCardSubTitle>Card subtitle</MDBCardSubTitle>
    //     <MDBCardText>
    //       Some quick example text to build on the card title and make up the bulk of the card's content.
    //     </MDBCardText>
    //     <MDBCardLink href='#'>Card link</MDBCardLink>
    //     <MDBCardLink href='#'>Another link</MDBCardLink>
    //   </MDBCardBody>
    // </MDBCard>

    // <MDBCardText>
    //         <small className='text-muted'>Last updated 3 mins ago</small>
    //       </MDBCardText>


   

    return (
      <div key={index}>
        <MDBCard className= "ms-5 me-5 mb-6 mt-5">
        {/* <MDBCardBody className= "ms-5 me-5 mb-6 mt-5" > */}
        <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src='https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.webp' alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
        <MDBCardBody className= "ms-5 me-5 mb-6 mt-2" >
        <MDBCardTitle style={{fontSize: 40}}>{postObject.title}</MDBCardTitle>
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
              <small className='text-muted' key={uuidv4()}>{user_post_comment.comment}<hr/></small>
            ))}
          </MDBCardText>
          </ul>

          <MDBBtn className="mb-4 px-5 mx-5 w-10" color="info" size="sm" onClick={handleDeleteClick}> Delete </MDBBtn>
          <MDBBtn className="mb-4 px-5 mx-5 w-10" color="info" size="sm"  onClick={() => {
            setUpdatedPost({...postObject})
            navigate("/posts/edit")
            }}> Update </MDBBtn>

        </MDBCardBody>
        </MDBCol>
        </MDBRow>
      </MDBCard>
      </div>
    );
  });

  return <div className="post-card">{postItems}</div>;
}

export default PostCard;

{/* <div key={index}>
        <h2>{postObject.title}</h2>
        <p>{postObject.date}</p>
        <p>{postObject.description}</p>
        <h4>
          {postObject.categories.map((category) => (
            <li className="cat-desc" key={uuidv4()}>
              {category.description}
            </li>
          ))}
        </h4>
        <div>
          <em>Comments</em>
        </div>
        <ul>
          {postObject.user_post_comments.map((user_post_comment) => (
            <li key={uuidv4()}>{user_post_comment.comment}</li>
          ))}
        </ul>

        <button onClick={handleDeleteClick}> Delete </button>
        <button onClick={() => {
          setUpdatedPost({...postObject})
          navigate("/posts/edit")
          }}> Update </button>
        <hr />
      </div>
    );
  }); */}
