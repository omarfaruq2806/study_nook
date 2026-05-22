import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { PiMapPinSimpleAreaFill } from "react-icons/pi";

const RoomCard = ({ room }) => {
  const { _id, name, image, description, floor, capacity, price, amenities } =
    room;
  console.log(description);
  return (
    <div className="bg-accent rounded-3xl overflow-hidden shadow-md shadow-secondary/20 ">
      <div>
        <Image
          src={image || "/hero.jpg"}
          alt="img"
          width={500}
          height={500}
          className=" object-cover"
        />
      </div>
      <div className="p-3 space-y-2">
        <h1 className="text-xl text-secondary font-bold">{name}</h1>
        <p className="text-gray-500">
          {description?.length > 100
            ? `${description.slice(0, 100)}...`
            : description}
        </p>
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
          {amenities.slice(0, 3).map((amenitie, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-white text-secondary"
            >
              {amenitie}
            </span>
          ))}
          {amenities.length > 3 && (
            <span className="text-xs px-2 py-1 rounded-full bg-white text-secondary">
              +{amenities.length - 3}
            </span>
          )}
        </div>
        <div className="">
          <Link href={`/rooms/${_id}`}>
            <button className="btn  rounded-full bg-secondary text-white hover:bg-white hover:text-secondary border flex w-full ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
