import React from 'react';

const Post = ({ title, content, editPost, id, deletePost }) => {
  return (
    <>
      <section className="postContainers">
        <h3>{title}</h3>
        <p> {content}</p>
        <div className="postActionContainer">
            <button className="postAction edit" onClick={() => editPost(id)}>Edit</button>
            <button className="postAction delete" onClick={() => deletePost(id)}>Delete</button>
        </div>
      </section>
    </>
  );
};
export default Post;