import React, {useState, useEffect} from 'react';
import PostItem from './components/PostItem';
import AddForm from './components/forms/AddForm';
import {v4 as uuidv4} from "uuid";

function App() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [comments, setComments] = useState([])
  //fetch data
  useEffect( () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
      setLoading(false)
      data.map(post=>{
        post.comments = comments;
      })
      setPosts(data.slice(0,2))
    })
  },[])

  console.log(posts)

  //add post
  const addPost = (formData) => {
    setPosts([
      ...posts,
      {
        userId: 1,
        id: uuidv4(),
        title: formData.title,
        body: formData.body
      }
    ])
  }
  //Edit post
  const editPost = ({id, title, body}) => {
    const updatedPosts = posts.map(post => {
      return post.id === id ? {...post, title,body} : post;
    })
    setPosts(updatedPosts);
  }

  //Delete post

  const deletePost = (postId) => {
    let result = window.confirm("Are you sure you want to delete this post?")
    if(result){
      const updatedPosts = posts.filter((post) => {return post.id !== postId});
      setPosts(updatedPosts);
    }
    
  }

  //display posts if there are retrieved posts
  const allPosts = posts.length ? 
  posts.map(post=>(
    <PostItem 
      key={post.id} 
      post={post} 
      editPost={editPost}
      deletePost={deletePost}
    />   
  )).reverse()
  : <h1>No posts to show</h1>
  const isLoading = loading ?  <h1>Loading....</h1>: allPosts;
  return (
    <div className="App">
      {/* Add posts */}
      {
        showForm? 
        <AddForm 
          addPost={addPost}
        /> :
        <button onClick={()=>setShowForm(true)}>Add Post</button>
      }
      
      {/* loading check if there are posts to display */}
      {isLoading}
    </div>
  );
}

export default App;
