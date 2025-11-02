import { Post } from "@/components/Post";
import Reel from "@/components/Reel";
import { CirclePlus } from "lucide-react";

function Feed() {
  const mockPosts = [
    {
      id: 1,
      author: { id: 1, username: "khaled_alotibi" },
      image: "https://picsum.photos/600/800?random=1",
      steps: 5420,
      caption: "Today I walked",
      created_at: "2025-02-01T10:32:14Z",
    },
    {
      id: 1,
      author: { id: 1, username: "khaled_alotibi" },
      image: "https://picsum.photos/600/800?random=1",
      steps: 5420,
      caption: "Today I walked",
      created_at: "2025-02-01T10:32:14Z",
    },

    {
      id: 1,
      author: { id: 1, username: "khaled_alotibi" },
      image: "https://picsum.photos/600/800?random=2",
      steps: 5420,
      caption: "Today I walked",
      created_at: "2025-02-01T10:32:14Z",
    },
    {
      id: 1,
      author: { id: 1, username: "khaled_alotibi" },
      image: "https://picsum.photos/600/800?random=3",
      steps: 5420,
      caption: "Today I walked",
      created_at: "2025-02-01T10:32:14Z",
    },
    {
      id: 1,
      author: { id: 1, username: "khaled_alotibi" },
      image: "https://picsum.photos/600/800?random=1",
      steps: 5420,
      caption: "Today I walked",
      created_at: "2025-02-01T10:32:14Z",
    },
    {
      id: 1,
      author: { id: 1, username: "khaled_alotibi" },
      image: "https://picsum.photos/600/800?random=1",
      steps: 5420,
      caption: "Today I walked",
      created_at: "2025-02-01T10:32:14Z",
    },
  ];
  return (
    <div className="h-screen w-screen bg-stone-900  text-amber-100 flex justify-center items-center">
      <div className="flex w-[95%] h-[95%] gap-3">
        <div className="w-1/2 bg-stone-800 rounded-2xl p-6"></div>
        <Reel Posts={mockPosts} />
      </div>
      <div className="fixed bottom-3 right-3">
        <Post />
      </div>
    </div>
  );
}

export default Feed;
