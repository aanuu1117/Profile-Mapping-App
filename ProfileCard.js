// src/components/ProfileCard.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

function ProfileCard({ profile }) {
  const [showMap, setShowMap] = useState(false);

  return (
    <div className="profile-card">
      <h2>{profile.name}</h2>
      <p>{profile.description}</p>
      <button onClick={() => setShowMap(!showMap)}>
        {showMap ? "Hide Map" : "Show on Map"}
      </button>
      {showMap && <MapComponent address={profile.address} />}
      <Link to={`/profile/${profile.id}`}>View Details</Link>
    </div>
  );
}

export default ProfileCard;
