"use client";
import React, { useEffect, useState } from "react";

function SinglePage({ params }) {
  const [singlePost, setSinglePost] = useState({});
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [userId, setUserId] = useState("");
  const [postId, setPostId] = useState("");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setSinglePost(json);
        setTitle(json.title);
        setDesc(json.body);
        setUserId(json.userId);
        setPostId(json.id)
      });
  }, []);

  const handleEdit = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: singlePost.id,
        title,
        body: desc,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
    setSinglePost(data);
  };

  console.log(singlePost);

  const handleDelete = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`, {
        method: 'PUT'
    });
    setSinglePost({});
  }

  return (
    <div>
      <h1>{singlePost.title}</h1>
      <br />
      <p>{singlePost.body}</p>
      <br />
      <p>
        PostId: {singlePost.id} / UserId: {singlePost.userId}
      </p>
      <br />
      <input
        type="text"
        placeholder = {singlePost.title}
        style={{ height: "30px", width:"300px"}}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder = {singlePost.body}
        style={{ height: "30px", width:"300px"}}
        onChange={(e) => setDesc(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder = {singlePost.userId}
        style={{ height: "30px", width:"300px"}}
        onChange={(e) => setUserId(e.target.value)}
      />
      <br />
      <button onClick={handleEdit}>Edit Post</button>
      <button onClick={handleDelete}>Delete Post</button>
    </div>
  );
}

export default SinglePage;
