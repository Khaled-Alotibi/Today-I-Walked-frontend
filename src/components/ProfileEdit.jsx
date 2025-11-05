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
        url: `http://127.0.0.1:8000/api/profile/${id}/`,
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
      <DialogContent className="sm:max-w-[425px] w-8/12 bg-stone-900 border-orange-500 text-amber-100">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="flex items-center justify-center mb-4">
              <DialogTitle className="text-2xl">Edit Your Profile</DialogTitle>
            </div>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Profile picture</Label>
              <Input
                type="file"
                accept="image/*"
                className="text-stone-700 file:text-orange-500 border border-orange-500"
                onChange={(e) => setProfilePic(e.target.files[0])}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Bio</Label>
              <Textarea
                value={bio}
                name="username"
                onChange={(e) => setBio(e.target.value)}
                placeholder="Write somthing..."
                className="border border-orange-500"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="bg-orange-500">
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
