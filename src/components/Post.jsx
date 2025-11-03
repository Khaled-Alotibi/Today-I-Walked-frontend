// https://ui.shadcn.com/docs/components/dialog
import { Button } from "@/components/ui/button";
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
export function Post() {
  const [caption, setCaption] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState(null);

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
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("caption", caption);
    data.append("steps", steps);
    if (image) {
      data.append("image", image);
    }

    const res = await newPost(data);
    setCaption("");
    setSteps("");
    setImage(null);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-orange-500 rounded-4xl text-amber-100 cursor-pointer">
          <CirclePlus size={40} />
        </button>
      </DialogTrigger>
      <DialogContent className="w-fit h-[80vh] bg-stone-900 border-orange-500 text-amber-100 overflow-y-auto">
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
                placeholder="Type your post here."
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
                <Button type="submit" className="w-6/12 bg-orange-500">
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
