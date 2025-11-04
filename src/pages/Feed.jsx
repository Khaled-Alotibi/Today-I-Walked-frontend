import { Post } from "@/components/Post";
import Reel from "@/components/Reel";
import axios from "axios";
import { useState, useEffect } from "react";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  async function getAllPosts() {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/posts");

      console.log(res.data);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="h-screen w-screen bg-stone-900  text-amber-100 flex justify-center items-center">
      <div className="flex w-[95%] h-[95%] gap-3">
        <div className="w-1/2 bg-stone-800 rounded-2xl p-6"></div>
        <Reel posts={posts} />
      </div>
      {user ? (
        <div className="fixed bottom-3 right-3">
          <Post />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Feed;
