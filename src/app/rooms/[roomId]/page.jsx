import DetailsRoomCard from "@/components/AllRoom/DetailsRoomCard";
import { getDetailsRoom } from "@/lib/data";
import Image from "next/image";
import React from "react";

export async function generateMetadata({ params }) {
  // read route params
  const { roomId } = await params;
  // fetch data
  const room = await getDetailsRoom(roomId);
  return {
    title: room.name,
    description: room.description,
  };
}

const DetailsRoom = async ({ params }) => {
  const { roomId } = await params;
  const room = await getDetailsRoom(roomId);
  return (
    <div>
      <div className="  py-10 px-4">
        <div className="container mx-auto grid grid-cols-1  gap-8 ">
          <DetailsRoomCard room={room}></DetailsRoomCard>
        </div>
      </div>
    </div>
  );
};

export default DetailsRoom;
