import React from 'react';
import "../styles/App.css";
import MyButton from './UI/Buttons/MyButton';

const Postitem = (props) => {
    
    return (
        <div className="post">
          <div className="post__container">
            <strong> {props.number}. {props.post.title}</strong>
            <div>
               {props.post.body}
            </div>
          </div>
          <div className="post__btns" >
            <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
          </div>
        </div>
    )
}
export default Postitem;