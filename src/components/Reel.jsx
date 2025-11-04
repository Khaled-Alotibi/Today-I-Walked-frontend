import { authRequest } from "@/lib/auth";
import { Link } from "react-router";
import { Trash, Pencil, Heart } from "lucide-react";
import { Post } from "./Post";
import { useState } from "react";
function Reel({ posts, user, handlePostDelete, setPosts }) {
  async function handleDelete(id) {
    try {
      const res = await authRequest({
        method: "delete",
        url: `http://127.0.0.1:8000/api/posts/${id}/`,
      });
      handlePostDelete(id);
    } catch (err) {
      console.log(err);
    }
  }
  console.log(posts);
  return (
    // {/* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts*/}
    <div className="w-2/3 bg-stone-800 rounded-2xl overflow-y-scroll snap-y snap-mandatory ">
      {posts.map((post) => (
        <section
          key={post.id}
          className="snap-start h-screen rounded-xl mb-2 bg-stone-900/40 flex flex-col "
        >
          <img src={post.image} alt={post.caption} className="w-full h-3/4" />
          <div className="p-4 space-y-4 flex-1 flex flex-col">
            <div className="flex justify-between text-sm text-gray-400">
              <span>
                <Link to={`/Profile/${post.user_id}`}>@{post.username}</Link>
              </span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <p className="text-lg">{post.caption || "Today I Walked."}</p>
            <div className="flex justify-between mt-auto items-center pb-[6%]">
              <p className="text-sm text-amber-500">
                {post.steps.toLocaleString()} steps
              </p>
              {user && user.user_id == post.user_id ? (
                <>
                  <div className="flex justify-end gap-4 mt-auto">
                    <button className="cursor-pointer ">
                      <Post post={post} setPosts={setPosts} />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="cursor-pointer"
                    >
                      <Trash className="text-red-500" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex justify-end gap-4 mt-auto">
                  <button className="cursor-pointer">
                    <Heart fill="#f97316" color="#f97316" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Reel;
