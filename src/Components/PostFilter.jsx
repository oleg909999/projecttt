import React from 'react'
import MyInput from './UI/Input/MyInput'
import MySelect from './UI/Select/MySelect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск....."        
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter,sort: selectedSort})} 
          options={[
            {value: 'title',name: 'По названию'},
            {value: 'body',name: 'По описанию'},
          ]} 
          defaultValue="Сортировка"/>
      </div>
  )
}

export default PostFilter