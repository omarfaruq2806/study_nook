"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

const AmenitiesFilter = () => {
  const [filterAmenities, setFilterAmenities] = useState("");
  const amenities = [
    "whiteboard",
    "Projector",
    "WiFi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const router = useRouter();
  const searchParams = useSearchParams();
  const handlefilter = (amenity) => {
    setFilterAmenities(amenity);

    const params = new URLSearchParams(searchParams.toString());
    if (filterAmenities) {
      params.set("fAmenities", filterAmenities);
    } else {
      params.delete("fAmenities");
    }
    router.push(`/rooms?${params.toString()}`);
  };

  return (
    <div className="p-4 flex flex-wrap gap-2 justify-center">
      {amenities.map((amenity) => (
        <button key={amenity} onClick={() => handlefilter(amenity)}
        className="text-sm py-2 px-4 bg-accent text-secondary rounded-full">
          {amenity}
        </button>
      ))}
    </div>
  );
};

export default AmenitiesFilter;
