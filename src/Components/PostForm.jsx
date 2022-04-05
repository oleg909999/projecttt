import React,{useState} from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Buttons/MyButton";

const PostForm = ({create}) => {

    const [post,setPost] = useState({title: '',body:''})

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id:Date.now()
        }
        create(newPost)
        setPost({title: '',body:''})
       }

    return (
        
        

      <form>
        {/* управляемый компонент */}
        <MyInput value={post.title} onChange={e => setPost({...post,title: e.target.value})} type="text" placeholder="Название постааа"/>
        <MyInput value={post.body} onChange={e => setPost({...post,body: e.target.value})} type="text" placeholder="описаниее постааа"/>
        {/* <input ref={bodyInputRef} type="text" placeholder="Описание поста"/>  неуправляемый */}
        <MyButton onClick={addNewPost}>Типа название кнопки</MyButton>
      </form>
    )
}

export default PostForm;