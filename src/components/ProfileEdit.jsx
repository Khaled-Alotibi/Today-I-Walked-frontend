// shadcn dialog
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
import { Label } from "@/components/ui/label";
import { Pencil } from "lucide-react";
import { Textarea } from "./ui/textarea";
import { useState } from "react";
import { authRequest } from "@/lib/auth";

export function ProfileEdit({ profile, setProfile, id }) {
  const [bio, setBio] = useState(profile.bio || "No Bio");
  const [profilePic, setProfilePic] = useState(null);
  async function editProfile(id, data) {
    try {
      const res = await authRequest({
        method: "patch",
        url: `https://today-i-walked-backend-production.up.railway.app/api/profile/${id}/`,
        data: data,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("profile updated.", res.data);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("bio", bio);
    if (profilePic) {
      data.append("profile_pic", profilePic);
    }

    const updatedProfile = await editProfile(id, data);

    if (updatedProfile) {
      setProfile(updatedProfile);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Pencil className="text-orange-500" />
      </DialogTrigger>
      <DialogContent className="w-full sm:w-11/12 md:w-4/5 lg:w-3/4 xl:max-w-[425px] bg-stone-900 border-orange-500 text-amber-100">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="flex items-center justify-center mb-3 sm:mb-4">
              <DialogTitle className="text-xl sm:text-2xl">Edit Your Profile</DialogTitle>
            </div>
          </DialogHeader>
          <div className="grid gap-3 sm:gap-4">
            <div className="grid gap-2 sm:gap-3">
              <Label htmlFor="name-1" className="text-sm sm:text-base">Profile picture</Label>
              <Input
                type="file"
                accept="image/*"
                className="text-stone-700 file:text-orange-500 border border-orange-500 text-sm sm:text-base"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </div>
            <div className="grid gap-2 sm:gap-3">
              <Label htmlFor="username-1" className="text-sm sm:text-base">Bio</Label>
              <Textarea
                value={bio}
                name="username"
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write somthing..."
                className="border border-orange-500 text-sm sm:text-base"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-orange-500 text-sm sm:text-base">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
