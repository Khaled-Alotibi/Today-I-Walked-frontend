import { Post } from "@/components/Post";
import Reel from "@/components/Reel";
import axios from "axios";
import { useState, useEffect } from "react";
import DarkVeil from "@/components/DarkVeil";
import { authRequest } from "@/lib/auth";

function Feed({ user }) {
  const [posts, setPosts] = useState([]);
  async function getAllPosts() {
    try {
      const res = await authRequest({
        method: "GET",
        url: "https://today-i-walked-backend-production.up.railway.app/api/posts",
      });

      console.log(res.data);
      setPosts(res.data.reverse());
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllPosts();
  }, []);
  return (
    <div className="h-screen w-screen   text-amber-100 flex justify-center items-center">
      <div className="flex w-[95%] h-[95%] gap-3 justify-center">
        <Reel posts={posts} setPosts={setPosts} />
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
