import React, { useEffect, useState } from "react";
import Post from "./Post";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          const data = [];
          snapshot.docs.forEach((doc) => {
            data.push({ ...doc.data(), id: doc.id });
          });
          setPosts(data);
          console.log(data);
        }
      ),
    [db]
  );

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.profilePic}
          img={post.image}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
