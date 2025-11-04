// https://ui.shadcn.com/docs/components/dialog
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "@/components/ui/label";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import ImageUpload from "./UploadImage";
import { authRequest } from "@/lib/auth";
export function Post({ post, setPosts }) {
  const [editingPost, setEditingPost] = useState(null);
  const [caption, setCaption] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState(null);

  const handleEditClick = (post) => {
    setEditingPost(post);
    setCaption(post.caption);
    setSteps(post.steps);
    setImage(post.image);
  };

  async function newPost(data) {
    try {
      const res = await authRequest({
        method: "post",
        url: "http://127.0.0.1:8000/api/posts/",
        data: data,
      });
      console.log("post created.", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  async function editPost(id, data) {
    try {
      const res = await authRequest({
        method: "patch",
        url: `http://127.0.0.1:8000/api/posts/${id}/`,
        data: data,
      });
      console.log("post updated.", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("caption", caption);
    data.append("steps", steps);
    if (image) {
      data.append("image", image);
    }
    if (editingPost) {
      const updatedPost = await editPost(editingPost.id, data);

      setPosts((prev) =>
        prev.map((post) => (post.id === updatedPost.id ? updatedPost : post)),
      );
    } else {
      await newPost(data);
    }

    setCaption("");
    setSteps("");
    setImage(null);
    setEditingPost(null);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        {post ? (
          <button
            onClick={() => handleEditClick(post)}
            className="cursor-pointer "
          >
            <Pencil className="text-red-500" />
          </button>
        ) : (
          <button className="bg-orange-500 rounded-4xl text-amber-100 cursor-pointer">
            <CirclePlus size={40} />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="w-8/12 h-[80vh] bg-stone-900 border-orange-500 text-amber-100 overflow-y-auto">
        <DialogHeader className="h-fit">
          <div className="flex items-center justify-center">
            <DialogTitle className="text-2xl">Share Your Walk</DialogTitle>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className=" w-full">
            <div>
              <Label className="pt-2 pb-2">Caption</Label>
              <Textarea
                name="caption"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                className="p-2"
                placeholder="Today I Walked."
              />
            </div>
            <div className="pt-2.5">
              <Label className="pt-2 pb-2">Upload Image</Label>
              <ImageUpload onFileSelect={setImage} />
            </div>
            <div className="pt-2.5">
              <Label className="pt-2 pb-2">Steps</Label>
              <Input
                type="number"
                name="steps"
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                placeholder="Enter the number of steps"
              ></Input>
            </div>
            <div className="pt-2.5 flex flex-row gap-6">
              {/* <div>
                <Label className="pt-2 pb-2">*****</Label>
                <Input
                  className="text-stone-500"
                  readOnly
                  value="this is read only"
                ></Input>
              </div>
              <div>
                <Label className="pt-2 pb-2">*****</Label>
                <Input
                  className="text-stone-500"
                  readOnly
                  value="this is read only"
                ></Input>
              </div>*/}
            </div>
            <div className="flex justify-center pt-6">
              <DialogClose>
                <Button type="submit" className="bg-orange-500 w-50">
                  Post
                </Button>
              </DialogClose>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
