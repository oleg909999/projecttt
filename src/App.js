import React, { useMemo, useState } from 'react';
import Counter from './Components/Counter';
import PostFilter from './Components/PostFilter';
import PostForm from './Components/PostForm';
import PostList from './Components/PostList';


function App() {
  const [posts,setPosts] = useState ([    // нахера нужен setPosts но без него не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    {id:1,title:'java is hard 1',body: 'descriprions 11'},
    {id:2,title:'java is hard 2',body: 'descriprions 22'},
    {id:3,title:'java is hard 3',body: 'descriprions 33'},
  ])
  // const[selectedSort, setSelectedSort] = useState('')
  // const[searchQuery, setSearchQuery] = useState('')
const [filter, setFilter] = useState({sort: '', query:''})


  const sortedPosts = useMemo(() => {
    console.log("NDFAJKSHDJKSAHDJKSAHDJKSAHGDKJSAHDKJHSAD")
    if(filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
      return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query,sortedPosts])
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

  //  const sortPosts = (sort) => {
  //     setSelectedSort(sort)
  //  }

  return (
    <div className="App">
      <Counter/>


      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}></hr>
      <PostFilter 
      filter={filter} 
      setFilter={setFilter}
      />
    
        
         <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Постыыыы"/>
        
      
        {/* <Postitem post={{id:1, title: 'Javascript', body: 'Descriptions'}} />   */}
    </div>
  );
}
export default App;
