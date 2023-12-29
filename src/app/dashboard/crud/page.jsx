"use client";
import React, { useEffect, useState } from "react";

function Crud() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState(1);
  const [postData, setPostData] = useState({})
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/40')
    .then((response) => response.json())
    .then((json) => {
    setPostData(json);
    setTitle(json.title);
    setDesc(json.body);
    setUserId(json.userId);
  });
    }, [])

  const handleSubmit = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title,
          body: desc,
          userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
  }

  const handleEdit = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/40', {
        method: 'PUT',
        body: JSON.stringify({
            id: 40,
            title,
            body: desc,
            userId,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      })
        const data = await res.json()
        console.log(data)
  }

  const handleDelete = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/40', {
        method: 'PUT'
    });
    const deletedPost = await res.json()
    console.log(deletedPost)
  }

  return (
    <div>
      <input
        type="text"
        placeholder = {postData.title}
        style={{ height: "30px", width:"300px"}}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder = {postData.body}
        style={{ height: "30px", width:"300px"}}
        onChange={(e) => setDesc(e.target.value)}
      />{" "}
      <br />
      <input
        type="text"
        placeholder = {postData.userId}
        style={{ height: "30px", width:"300px"}}
        onChange={(e) => setUserId(e.target.value)}
      />{" "}
      <br />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Crud;
