import React from "react";
import { v4 as uuidv4 } from 'uuid';

function PostCard({ posts, handleDeletePost }) {
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
        <p>{postObject.title}</p>
        <p>{postObject.date}</p>
        <p>{postObject.description}</p>
        <ul>{postObject.categories.map(category => <li key={uuidv4()}>{category.description}</li>)}</ul>
        <div><em>Comments</em></div>
        <ul>{postObject.user_post_comments.map(user_post_comment => <li key={uuidv4()}>{user_post_comment.comment}</li>)}</ul>


        <button onClick={handleDeleteClick}> Delete </button>
        <hr/>
      </div>
    );
  });

  return <div className="post-card">{postItems}</div>;
}

export default PostCard;
