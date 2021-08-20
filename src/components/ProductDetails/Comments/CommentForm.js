import React from "react";
import Button from "../../Buttons/Button";
import  './commentForm.scss';
import { ReactComponent as Like } from "../../../Images/icons/like.svg";
import { ReactComponent as Dislike } from "../../../Images/icons/dislike.svg";


const CommentForm = () => {
  return (
    <div className={"commentForm"}>
      <h3>دیدگاه شما</h3>
      <div>
        <ul>
          <li>
            <label htmlFor={"comment-input-1"}>عنوان</label>
            <span>*</span>
            <input id={"comment-input-1"} type="text"/>
          </li>
          <li>
            <label htmlFor={"comment-input-2"}>نقاط قوت</label>
            <span><Like/></span>
            <input id={"comment-input-2"} type="text"/>
          </li>
          <li>
            <label htmlFor={"comment-input-3"}>نقاط ضعف</label>
            <span><Dislike/></span>
            <input id={"comment-input-3"} type="text"/>
          </li>
         
          <li>
            <label htmlFor={"comment-input-4"}>توضیحات</label>
            <span>*</span>
            <input id={"comment-input-4"} type="text"/>
          </li>
         <Button variant="btn-secondary" title={"ثبت دیدگاه"}/>
        </ul>
      </div>
    </div>
  );
};

export default CommentForm;
