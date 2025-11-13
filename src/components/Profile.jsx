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
        url: `https://today-i-walked-backend-production.up.railway.app/api/profile/${id}/`,
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
        url: `https://today-i-walked-backend-production.up.railway.app/api/profile/${id}`,
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
        `https://today-i-walked-backend-production.up.railway.app/api/posts/${id}/posts`,
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
    <div className="h-screen w-screen text-amber-100 flex flex-col justify-center items-center">
      <div className="flex flex-col lg:flex-row w-full sm:w-[95%] h-[95%] gap-3 justify-center px-2 sm:px-0">
        <div className="w-full lg:w-1/3 bg-stone-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col h-auto lg:h-[95%] relative border border-orange-500 mt-10 lg:mt-10">
          {user.user_id == id ? (
            <>
              <button className="top-2 sm:top-3 right-2 sm:right-3 absolute cursor-pointer">
                <ProfileEdit
                  profile={profile}
                  setProfile={setProfile}
                  id={id}
                />
              </button>
              <button
                onClick={deleteAccount}
                className="bottom-2 sm:bottom-3 right-2 sm:right-3 text-xs sm:text-sm md:text-[15px] absolute cursor-pointer bg-red-600/80 rounded p-1 sm:p-2 mb-2.5"
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
                <div className="w-full border-b border-orange-500 flex justify-center mb-3 sm:mb-4">
                  <img
                    src={`https://today-i-walked-backend-production.up.railway.app${profile.profile_pic}`}
                    className="w-12 h-12 sm:w-15 sm:h-15 mb-2 rounded-full border border-amber-500"
                  />
                </div>

                <div className="mt-2">
                  <p className="text-sm sm:text-base text-amber-100">
                    Username:
                    <span className="text-stone-400 ml-2">
                      @{profile.username}
                    </span>
                  </p>

                  <h3 className="border-b border-orange-500 mt-2 mb-2 text-sm sm:text-base">Bio</h3>
                  <p className="text-xs sm:text-sm md:text-base text-stone-200">{profile.bio || "No Bio"}</p>
                </div>
              </div>

              <div className="mt-auto text-xs sm:text-sm flex border w-fit rounded border-orange-500">
                <Footprints size={16} className="text-orange-500 m-1 sm:w-5 sm:h-5" />
                <p className="text-orange-500 m-1">
                  {profile.total_steps?.toLocaleString()}
                </p>
              </div>
            </>
          ) : (
            <p className="text-sm sm:text-base">Loading profile...</p>
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
