// src/components/ProfileDetails.js
import React from "react";
import { useParams } from "react-router-dom";

const profilesData = [
  { id: 1, name: "John Doe", description: "Developer", address: "New York, USA" },
  { id: 2, name: "Jane Smith", description: "Designer", address: "Paris, France" },
];

function ProfileDetails() {
  const { id } = useParams();
  const profile = profilesData.find((p) => p.id === parseInt(id));

  return (
    <div>
      <h1>{profile.name}</h1>
      <p>{profile.description}</p>
      <p>Address: {profile.address}</p>
    </div>
  );
}

export default ProfileDetails;
