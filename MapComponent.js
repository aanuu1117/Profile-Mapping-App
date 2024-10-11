// src/components/MapComponent.js
import React from "react";
import { GoogleMap, Marker, LoadScript } from "@react-google-maps/api";

// Replace this with your Google Maps API key
const GOOGLE_MAPS_API_KEY = "YOUR_GOOGLE_MAPS_API_KEY";

const mapContainerStyle = {
  width: "400px",
  height: "300px",
};

function MapComponent({ address }) {
  const location = {
    lat: 40.7128, // Replace with dynamic lat/lng from geocoding API
    lng: -74.006,
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={mapContainerStyle} center={location} zoom={10}>
        <Marker position={location} />
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
