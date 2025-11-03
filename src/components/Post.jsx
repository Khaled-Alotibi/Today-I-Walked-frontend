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
      <form>
        <DialogContent className="w-fit h-[80vh] bg-stone-900 border-orange-500 text-amber-100 overflow-y-auto">
          <DialogHeader className="h-fit">
            <div className="flex items-center justify-center">
              <DialogTitle className="text-2xl">Share Your Walk</DialogTitle>
            </div>
          </DialogHeader>
          <div className=" w-full">
            <div>
              <Label className="pt-2 pb-2">Caption</Label>
              <Textarea className="p-2" placeholder="Type your message here." />
            </div>
            <div className="pt-2.5">
              <Label className="pt-2 pb-2">Upload Image</Label>
              <ImageUpload onFileSelect={setImage} />
            </div>
            <div className="pt-2.5">
              <Label className="pt-2 pb-2">Steps</Label>
              <Input type="number"></Input>
            </div>
            <div className="pt-2.5 flex flex-row gap-6">
              <div>
                <Label className="pt-2 pb-2">*****</Label>
                <Input
                  className="text-stone-500"
                  readonly
                  value="this is read only"
                ></Input>
              </div>
              <div>
                <Label className="pt-2 pb-2">*****</Label>
                <Input
                  className="text-stone-500"
                  readonly
                  value="this is read only"
                ></Input>
              </div>
            </div>
            <div className="flex justify-center pt-6">
              <Button className="w-6/12 bg-orange-500">Post</Button>
            </div>
          </div>
        </DialogContent>
      </form>
    </Dialog>
  );
}
