import React, { useState } from "react";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  BookmarkIcon,
  FaceSmileIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { serverTimestamp } from "firebase/firestore";

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className=" bg-white border rounded-md my-7 p-5">
      {/* Header */}
      <div className="flex items-center">
        <img
          className="h-12 w-12 object-contain rounded-full border p-1 mr-3"
          src={userImg}
          alt=""
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* img */}
      <div>
        <img className="object-cover w-full" src={img} alt="" />
      </div>

      {/* Buttons */}

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex items-center space-x-2">
            <HeartIcon className="btn" />
            <ChatBubbleOvalLeftIcon className="btn" />
            <PaperAirplaneIcon className="btn -rotate-45" />
          </div>
          <BookmarkIcon className="btn " />
        </div>
      )}

      {/* Caption */}

      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>

      {/* Comments */}

      {/* Input box */}

      {session && (
        <div className="flex p-4 items-center">
          <FaceSmileIcon className="h-7" />
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="h-7 border-non flex-1 border-transparent focus:border-transparent focus:ring-0 outline-none"
            placeholder="Add a Comment..."
            type="text"
          />
          <button
            type="submit"
            disabled={!comment.trim()}
            className="font-semibold text-blue-400"
          >
            Post
          </button>
        </div>
      )}
    </div>
  );
}

export default Post;
