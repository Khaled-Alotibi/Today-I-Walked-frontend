import Reel from "@/components/Reel";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function Profile({ user }) {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  async function handlePostDelete(id) {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }
  async function getAllPosts() {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/posts/${id}/posts`,
      );

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
    <div className="h-screen w-screen bg-stone-900  text-amber-100 flex flex-col justify-center items-center">
      <div className="flex w-[95%] h-[95%] gap-3 justify-center">
        hello world
      </div>
      <div className="flex w-[95%] h-[95%] gap-3 justify-center">
        <Reel
          posts={posts}
          setPosts={setPosts}
          user={user}
          handlePostDelete={handlePostDelete}
        />
      </div>
    </div>
  );
}
export default Profile;
