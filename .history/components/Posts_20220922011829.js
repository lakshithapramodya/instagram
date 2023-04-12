import React from "react";
import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "123",
      username: "lakshitha",
      userImg:
        "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/248527317_4183867555076383_6699299229043078899_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W5cZLJz3rHoAX8dBVf8&_nc_ht=scontent-sin6-1.xx&oh=00_AT-iDtHv48zpTS3SPUUKAq9MaNOibzBgDxgJbsCpTWW-vA&oe=632FFEE4",
      img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/250347315_4195145313948607_6002166121501166028_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2HiBLP6T_W4AX-jdVix&_nc_ht=scontent-sin6-4.xx&oh=00_AT_ya_QNTdMteelRNDGlIwSxdp3cgbcdv4HWQ4uAmM1u1w&oe=632F4692",
      caption: "Chill!",
    },
    {
      id: "123",
      username: "lakshitha",
      userImg:
        "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/248527317_4183867555076383_6699299229043078899_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W5cZLJz3rHoAX8dBVf8&_nc_ht=scontent-sin6-1.xx&oh=00_AT-iDtHv48zpTS3SPUUKAq9MaNOibzBgDxgJbsCpTWW-vA&oe=632FFEE4",
      img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/250347315_4195145313948607_6002166121501166028_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2HiBLP6T_W4AX-jdVix&_nc_ht=scontent-sin6-4.xx&oh=00_AT_ya_QNTdMteelRNDGlIwSxdp3cgbcdv4HWQ4uAmM1u1w&oe=632F4692",
      caption: "Chill!",
    },
    {
      id: "123",
      username: "lakshitha",
      userImg:
        "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/248527317_4183867555076383_6699299229043078899_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W5cZLJz3rHoAX8dBVf8&_nc_ht=scontent-sin6-1.xx&oh=00_AT-iDtHv48zpTS3SPUUKAq9MaNOibzBgDxgJbsCpTWW-vA&oe=632FFEE4",
      img: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/250347315_4195145313948607_6002166121501166028_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=e3f864&_nc_ohc=2HiBLP6T_W4AX-jdVix&_nc_ht=scontent-sin6-4.xx&oh=00_AT_ya_QNTdMteelRNDGlIwSxdp3cgbcdv4HWQ4uAmM1u1w&oe=632F4692",
      caption: "Chill!",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
