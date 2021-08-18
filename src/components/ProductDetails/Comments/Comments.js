import React from "react";
import "./comments.scss";
import Comment from "./Comment";

const Comments = (props) => {
  const { commentsList , id } = props;
  return (
    <div className={"comments-section"} id={id}>
      <h3>نظرات کاربران</h3>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />

      {/* {commentsList.map((comment, index) => {
        <div key={index}>
          <Comment Cinfo={comment} />
        </div>;
      })} */}
    </div>
  );
};

export default Comments;
