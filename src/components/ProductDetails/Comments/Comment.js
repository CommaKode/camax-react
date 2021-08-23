import React from "react";
import "./comments.scss";
import { ReactComponent as Like } from "../../../Images/icons/like.svg";
import { ReactComponent as Dislike } from "../../../Images/icons/dislike.svg";


const Comment = (props) => {

  return (
    <div className={"comments"}>
      <div className="comment-card">
        <div className="c-information">
          <span className="c-name">محمد معلمی</span>
          <span className="c-date">1400/5/24</span>
        </div>
        <span></span>
        <p className="comment">اگر گرون تر بود میخریدم</p>
      </div>
      <div className="strengths-card">
        <div className={"strengths-title"}>نقاط ضعف و نقاط قوت</div>
        <span></span>
        <div className="strengths">
          <span classname={"positive"}><Like/> اهنگ میزنه</span>
          <span classname={"negative"}><Dislike/>  فقط خاموش میشه</span>
        </div>
      </div>
    </div>
  );
};

export default Comment;
