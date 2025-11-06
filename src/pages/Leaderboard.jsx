import axios from "axios";
import { Link } from "react-router";
import { Footprints } from "lucide-react";
import { useState, useEffect } from "react";

export default function Leaderboard() {
  const [profiles, setProfiles] = useState([]);

  async function getAllProfiles() {
    try {
      const res = await axios.get("http://localhost:8000/api/profiles/");
      const sorted = res.data
        .sort((a, b) => b.total_steps - a.total_steps)
        .filter((a) => a.total_steps > 0);
      setProfiles(sorted);

      console.log(profiles);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAllProfiles();
  }, []);
  return (
    <div className="h-screen w-screen text-amber-100 flex justify-center items-center">
      <div className="flex flex-col w-2/3 h-2/3 gap-3 justify-start p-6 bg-stone-900 rounded-xl  overflow-y-auto border-orange-500 border">
        <h1 className="text-2xl font-bold mb-4 text-center">Leaderboard</h1>

        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            className="flex items-center gap-4 bg-white/5 px-4 py-3 rounded-lg border border-orange-500"
          >
            <span className="text-2xl w-10 text-center">{index + 1}</span>
            <Link className="flex-1 " to={`/Profile/${profile.user_id}`}>
              @{profile.username}
            </Link>

            <span className="font-semibold text-xl">
              <div className="flex ">
                <p className="text-amber-100">
                  {profile.total_steps?.toLocaleString()}
                </p>
                <Footprints
                  size={20}
                  className="text-orange-500 border-orange-500 ml-3"
                />
              </div>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
