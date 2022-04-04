import React, { useState } from 'react';
import Counter from './Components/Counter';
import PostList from './Components/PostList';
import MyButton from './Components/UI/Buttons/MyButton'
import MyInput from './Components/UI/Input/MyInput'

function App() {
  const [posts,setPosts] = useState ([    // нахера нужен setPosts но без него не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {id:1,title:'java is hard 1',body: 'descriprions 11'},
    {id:2,title:'java is hard 2',body: 'descriprions 22'},
    {id:3,title:'java is hard 3',body: 'descriprions 33'},
  ])


   const [title,setTitlee] = useState()
  
   const [body, setBody] = useState()

  // const bodyInputRef = useRef() //не управляемый компонент

   const addNewPost = (e) => {
     e.preventDefault()
     console.log(e)
     // console.log(bodyInputRef.current.value)
    }

  return (
    <div className="App">
      <Counter/>
      <br/>
      <form>
        {/* управляемый компонент */}
        <MyInput value={title} onChange={e => setTitlee(e.target.value)} type="text" placeholder="Название постааа"/>
        <MyInput value={body} onChange={e => setBody(e.target.value)} type="text" placeholder="описаниее постааа"/>
        {/* <MyInput ref={bodyInputRef} type="text" placeholder="Описание поста"/> Не управляемый компонент */}
        <MyButton onClick={addNewPost}>Типа название кнопки</MyButton>
      </form>
      <PostList posts={posts} title="dasdaaaasdssss"/>
        {/* <Postitem post={{id:1, title: 'Javascript', body: 'Descriptions'}} />   */}
    </div>
  );
}
export default App;
