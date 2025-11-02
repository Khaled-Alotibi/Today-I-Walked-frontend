function Reel({ Posts }) {
  return (
    // {/* https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap/Basic_concepts*/}
    <div className="w-1/2 bg-stone-800 rounded-2xl overflow-y-scroll snap-y snap-mandatory ">
      {Posts.map((post) => (
        <section
          key={post.id}
          className="snap-start h-screen rounded-xl  mb-2 bg-stone-900/40 "
        >
          <img src={post.image} alt={post.caption} className="w-full h-3/4" />
          <div className="p-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>@{post.author.username}</span>
              <span>{new Date(post.created_at).toLocaleDateString()}</span>
            </div>
            <p className="text-lg">{post.caption || "No caption"}</p>
            <p className="text-sm text-amber-500">
              {post.steps.toLocaleString()} steps
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
export default Reel;
