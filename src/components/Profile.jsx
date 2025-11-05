import Reel from "@/components/Reel";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { authRequest, clearTokens } from "@/lib/auth";
import { Footprints, Pencil } from "lucide-react";
import { ProfileEdit } from "./ProfileEdit";
import { Link } from "react-router";

function Profile({ user, setUser }) {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);
  const [profile, setProfile] = useState([]);

  async function deleteAccount() {
    try {
      await authRequest({
        method: "delete",
        url: `http://127.0.0.1:8000/api/profile/${id}/`,
      });
      setUser(null);
      clearTokens();
    } catch (err) {
      console.log(err);
    }
  }

  async function getProfile() {
    try {
      const res = await authRequest({
        method: "get",
        url: `http://127.0.0.1:8000/api/profile/${id}`,
      });
      setProfile(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function handlePostDelete(id) {
    setPosts((prev) => prev.filter((post) => post.id !== id));
  }
  async function getAllPosts() {
    try {
      const res = await axios.get(
        `http://127.0.0.1:8000/api/posts/${id}/posts`,
      );

      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getAllPosts();
    getProfile();
  }, [id]);
  return (
    <div className="h-screen w-screen  text-amber-100 flex flex-col justify-center items-center">
      <div className="flex w-[95%] h-[95%] gap-3 justify-center">
        <div className="w-1/3 bg-stone-800 rounded-2xl p-6 flex flex-col h-full relative">
          {user.user_id == id ? (
            <>
              <button className="top-3 right-3 absolute cursor-pointer">
                <ProfileEdit
                  profile={profile}
                  setProfile={setProfile}
                  id={id}
                />
              </button>
              <button
                onClick={deleteAccount}
                className="bottom-3 right-3 text-[15px] absolute cursor-pointer bg-red-600 rounded p-2 mb-2.5"
              >
                <Link to="/"> Delete Your Account..</Link>
              </button>
            </>
          ) : (
            ""
          )}

          {profile ? (
            <>
              <div className="flex flex-col">
                <div className="w-full border-b border-orange-500 flex justify-center mb-4">
                  <img
                    src={`http://127.0.0.1:8000${profile.profile_pic}`}
                    className="w-15 h-15 mb-2  rounded-full border border-amber-500"
                  />
                </div>

                <div className="mt-2">
                  <p className="text-amber-100">
                    Username:
                    <span className="text-stone-400 ml-2">
                      @{profile.username}
                    </span>
                  </p>

                  <h3 className="border-b border-amber-400 mt-2 mb-2">Bio</h3>
                  <p className="text-stone-200">{profile.bio || "No Bio"}</p>
                </div>
              </div>

              <div className="mt-auto text-sm flex border w-fit rounded border-orange-500">
                <Footprints size={20} className="text-orange-500 m-1" />
                <p className="text-orange-500 m-1">
                  {profile.total_steps?.toLocaleString()}
                </p>
              </div>
            </>
          ) : (
            <p>Loading profile...</p>
          )}
        </div>

        <Reel
          posts={posts}
          setPosts={setPosts}
          user={user}
          handlePostDelete={handlePostDelete}
        />
      </div>
    </div>
  );
}
export default Profile;
