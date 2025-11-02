// https://ui.shadcn.com/docs/components/dialog
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
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
export function Post() {
  const [image, setImage] = useState(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-orange-500 rounded-4xl text-amber-100 cursor-pointer">
          <CirclePlus size={40} />
        </button>
      </DialogTrigger>
      <DialogContent className="w-screen h-[95vh] bg-stone-900 border-orange-500 text-amber-100 overflow-y-auto">
        <DialogHeader className="h-fit">
          <div className="flex items-center justify-center">
            <DialogTitle className="text-2xl">Share a Walk</DialogTitle>
          </div>
        </DialogHeader>
        <div className="h-screen w-full">
          <div>
            <Label className="p-2">Caption</Label>
            <Textarea className="p-2" placeholder="Type your message here." />
          </div>
          <div className="pt-2.5">
            <ImageUpload onFileSelect={setImage} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
