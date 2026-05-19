import { Span } from "next/dist/trace";
import Image from "next/image";
import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { PiMapPinAreaFill, PiMapPinSimpleAreaFill } from "react-icons/pi";

const LatestRoomCard = ({ room }) => {
  const { name, image, description, floor, capacity, price, amenities } = room;
  return (
    <div className="bg-accent rounded-3xl overflow-hidden shadow-md shadow-secondary/20">
      <div>
        <Image
          src={image}
          alt="img"
          width={500}
          height={500}
          className=" object-fit: cover"
        />
      </div>
      <div className="p-3 space-y-2">
        <h1 className="text-xl text-secondary font-bold">{name}</h1>
        <p className="text-gray-500">{description}</p>
        <p className=" flex gap-2 text-md font-medium  items-center font-bol text-gray-500">
          <PiMapPinSimpleAreaFill /> Floor {floor}
        </p>
        <div className="flex justify-between text-secondary">
          <p className="text-lg flex items-center gap-2 ">
            <IoPerson />
            {capacity} People
          </p>
          <p className="text-xl flex items-center font-bold">
            <FaDollarSign />
            {price}
            <small className=" text-sm ">/hr</small>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenitie, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white text-secondary"
            >
              {amenitie}
            </span>
          ))}
        </div>
        <div></div>
        <button className="btn w-full rounded-full bg-secondary text-white hover:bg-white hover:text-secondary border ">
          View Details
        </button>
      </div>
    </div>
  );
};

export default LatestRoomCard;
