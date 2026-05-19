import { getDetailsRoom } from "@/lib/data";
import Image from "next/image";
import React from "react";

const DetailsRoom = async ({ params }) => {
  const { roomId } = await params;
  const room = await getDetailsRoom(roomId);
  console.log(room);
  return (
    <div>
        <h1>this is details room</h1>
    </div>
  );
};

export default DetailsRoom;
