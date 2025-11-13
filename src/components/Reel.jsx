import { authRequest } from "@/lib/auth";
import { Link } from "react-router";
import { Trash, Pencil, Heart } from "lucide-react";
import { Post } from "./Post";
import { useState } from "react";
function Reel({ posts, user, handlePostDelete, setPosts }) {
  async function toggleLike(post, setPosts) {
    const method = post.liked_by ? "DELETE" : "POST";
    try {
      const res = await authRequest({
        method: method,
        url: `https://today-i-walked-backend-production.up.railway.app/api/posts/${post.id}/like/`,
      });
      setPosts((prev) =>
        prev.map((p) =>
          p.id === post.id
            ? {
                ...p,
                liked_by: !post.liked_by,
                likes_count: post.likes_count + (post.liked_by ? -1 : 1),
              }
            : p,
        ),
      );
      console.log("likes:", post);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleDelete(id) {
    try {
      const res = await authRequest({
        method: "delete",
        url: `https://today-i-walked-backend-production.up.railway.app/api/posts/${id}/`,
      });
      handlePostDelete(id);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    // {/* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts*/}
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-2/3 bg-stone-900 rounded-xl sm:rounded-2xl overflow-y-scroll snap-y snap-mandatory border border-orange-500 no-scrollbar mt-10 sm:mt-10">
      {posts.map((post) => (
        <section
          key={post.id}
          className="snap-start h-full rounded-xl mb-2 bg-stone-900/40 flex flex-col "
        >
          <img src={post.image} alt={post.caption} className="w-full h-3/4 object-cover" />
          <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 flex-1 flex flex-col">
            <div className="flex justify-between text-xs sm:text-sm text-gray-400">
              <span>
                <Link to={`/Profile/${post.user_id}`}>@{post.username}</Link>
              </span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <p className="text-base sm:text-lg">{post.caption || "Today I Walked."}</p>
            <div className="flex justify-between mt-auto items-center pb-[0%]">
              <p className="text-xs sm:text-sm text-amber-500">
                {post.steps.toLocaleString()} steps
              </p>
              {user && user.user_id == post.user_id ? (
                <>
                  <div className="flex justify-end gap-3 sm:gap-4 mt-auto">
                    <button className="cursor-pointer ">
                      <Post post={post} setPosts={setPosts} />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="cursor-pointer pb-2"
                    >
                      <Trash className="text-red-500" />
                    </button>
                  </div>
                </>
              ) : (
                <div className="flex justify-end gap-3 sm:gap-4 mt-auto">
                  <button
                    className="cursor-pointer"
                    onClick={() => toggleLike(post, setPosts)}
                  >
                    {post.liked_by ? (
                      <Heart fill="#f97316" color="#f97316" />
                    ) : (
                      <Heart color="#f97316" />
                    )}
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
