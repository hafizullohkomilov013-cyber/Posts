

import React from "react";
import { useState, useEffect } from "react";


function Server() {
  const [post, setPost] = useState([])

  useEffect(() => {
    async function getPosts() {
      try {
        let res = await fetch("https://jsonplaceholder.typicode.com/comments");
        if(!res.ok){
          throw new Error('Xatoli')
        }
        let data = await res.json()
        setPost(data)

      } catch (error) {
        
      }
    }
    getPosts()
  }, [])

  
  return (
    <main>

        <div className="container">
          {post.slice(0, 8).map((item) => {
            return (
              <div key={item.id} className="post-card">
                <img
                  className="img-card"
                  src={`https://picsum.photos/150?random=${item.id}`}
                  alt={item.title}
                />
                <h2>{item.name}</h2>
                <h3>{item.body}</h3>
                <p>{item.email}</p>
              </div>
            );
          })}
        </div>
    </main>
  )
}

export default Server


