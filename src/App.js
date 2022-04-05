import React, { useState,useRef } from 'react';
import Counter from './Components/Counter';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';


function App() {
  const [posts,setPosts] = useState ([    // нахера нужен setPosts но без него не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {id:1,title:'java is hard 1',body: 'descriprions 11'},
    {id:2,title:'java is hard 2',body: 'descriprions 22'},
    {id:3,title:'java is hard 3',body: 'descriprions 33'},
  ])


  //  const [title,setTitlee] = useState('')
  //  const [body, setBody] = useState('')
 
  // const bodyInputRef = useRef() //не управляемый компонент

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
   }

  return (
    <div className="App">
      <Counter/>
      
      <PostForm create={createPost}/>

      <PostList posts={posts} title="dasdaaaasdssss"/>
        {/* <Postitem post={{id:1, title: 'Javascript', body: 'Descriptions'}} />   */}
    </div>
  );
}
export default App;
