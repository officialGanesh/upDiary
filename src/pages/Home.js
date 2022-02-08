import React, { useState, useEffect } from 'react';
import CardBlog from '../components/CardBlog';
import Header from '../components/Header';
import { colRef } from '../Firebase-config';
import { onSnapshot, orderBy, query } from 'firebase/firestore';

function Home({ setIsAuth }) {

  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const getBlogs = async () => {

          const q = query(colRef, orderBy("createdAt"))
          onSnapshot(q, (snapshot)=>
          setBlogs(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id}))))
    };

    getBlogs()
    }, [])
    
    
  return (
      <>
      <Header setIsAuth={setIsAuth} />

      {
        blogs.map((blog) => {
          return (

            <CardBlog title={blog.title} desc={blog.desc} />
          )
        })
      }
      
      </>
  );
}

export default Home;
