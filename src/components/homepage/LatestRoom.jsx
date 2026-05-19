import { getLatestRoom } from "@/lib/data";
import React from "react";
import LatestRoomCard from "../shared/LatestRoomCard";

const LatestRoom = async () => {
  const latestRooms = await getLatestRoom();
  console.log(latestRooms);
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl lg:5xl font-bold text-secondary pb-10">
        Latest Room
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {latestRooms.map((room) => (
          <LatestRoomCard key={room._id} room={room}></LatestRoomCard>
        ))}
      </div>
    </div>
  );
};

export default LatestRoom;
