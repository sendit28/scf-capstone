import React from "react";

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
        <div><em>Comments</em></div>
        <ul>{postObject.user_post_comments.map(user_post_comment => <li key={user_post_comment.id}>{user_post_comment.comment}</li>)}</ul>


        <button onClick={handleDeleteClick}> Delete </button>
      </div>
    );
  });

  return <div className="post-card">{postItems}</div>;
}

export default PostCard;
