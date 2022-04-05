import React, { useMemo, useState } from 'react';
import Counter from './Components/Counter';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';
import MyInput from './Components/UI/Input/MyInput';
import MySelect from './Components/UI/Select/MySelect';


function App() {
  const [posts,setPosts] = useState ([    // нахера нужен setPosts но без него не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {id:1,title:'java is hard 1',body: 'descriprions 11'},
    {id:2,title:'java is hard 2',body: 'descriprions 22'},
    {id:3,title:'java is hard 3',body: 'descriprions 33'},
  ])
  const[selectedSort, setSelectedSort] = useState('')
  const[searchQuery, setSearchQuery] = useState('')



  const sortedPosts = useMemo(() => {
    console.log("NDFAJKSHDJKSAHDJKSAHDJKSAHGDKJSAHDKJHSAD")
    if(selectedSort) {
      return [...posts].sort((a,b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
      return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery,sortedPosts])
  //  const [title,setTitlee] = useState('')
  //  const [body, setBody] = useState('')
 
  // const bodyInputRef = useRef() //не управляемый компонент

   const createPost = (newPost) => {
      setPosts([...posts, newPost])
   }

  //  пост из дочернего компонента
   const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
   }

   const sortPosts = (sort) => {
      setSelectedSort(sort)
   }

  return (
    <div className="App">
      <Counter/>


      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}></hr>
      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Поиск....."        
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts} 
          options={[
            {value: 'title',name: 'По названию'},
            {value: 'body',name: 'По описанию'},
          ]} 
          defaultValue="Сортировка"/>
      </div>
      {
        sortedAndSearchedPosts.length 
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Постыыыы"/>
        : <h1 style={{textAlign: 'center'}}> Постыыыыы пропали</h1>
      }
      
        {/* <Postitem post={{id:1, title: 'Javascript', body: 'Descriptions'}} />   */}
    </div>
  );
}
export default App;
