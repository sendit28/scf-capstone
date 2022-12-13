import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

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

    function handleUpdateClick() {
      const updateObj = {
        title: posts.title,
        description: posts.description,
      };
      fetch(`/posts/${postObject.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateObj),
      })
        .then((r) => r.json())
        .then((updatedPost) => handleUpdatePost(updatedPost));
    }

    // console.log(postObject)
    // setUpdatedPost(postObject)
    // }

    return (
      <div key={index}>
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
  });

  return <div className="post-card">{postItems}</div>;
}

export default PostCard;
