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
        <button onClick={handleDeleteClick}> Delete </button>
      </div>
    );
  });

  return <div className="post-card">{postItems}</div>;
}

export default PostCard;
