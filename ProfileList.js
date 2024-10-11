// src/components/ProfileList.js
import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

const profilesData = [
  { id: 1, name: "John Doe", description: "Developer", address: "New York, USA" },
  { id: 2, name: "Jane Smith", description: "Designer", address: "Paris, France" },
];

function ProfileList() {
  const [profiles] = useState(profilesData);

  return (
    <div>
      <h1>Profiles</h1>
      <div>
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
}

export default ProfileList;
