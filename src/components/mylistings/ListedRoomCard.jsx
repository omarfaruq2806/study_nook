import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ListedRoomCard = ({ listing }) => {
  const {
    name,
    description,
    image,
    floor,
    capacity,
    price,
    amenities,
    creator,
    total,
  } = listing;
  console.log(listing);

  return (
    <div className="group border border-secondary/20 bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 flex flex-col md:flex-row">
      {/* Image */}
      <div className="md:w-[40%] overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        {/* Top */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <h1 className="text-3xl font-bold text-gray-800">{name}</h1>

            <span className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold">
              ${price}/hr
            </span>
          </div>

          <p className="text-gray-600  mb-5">{description}</p>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary/5 p-4 rounded-2xl">
              <p className="text-sm text-gray-500">Floor</p>
              <h3 className="font-bold text-lg text-gray-800">{floor}</h3>
            </div>

            <div className="bg-secondary/5 p-4 rounded-2xl">
              <p className="text-sm text-gray-500">Capacity</p>
              <h3 className="font-bold text-lg text-gray-800">
                {capacity} Persons
              </h3>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-bold text-gray-800 mt-6">Amenities :</h1>
            <div className="mt-6 flex flex-wrap gap-2">
            
            {amenities.map((amenity) => (
              <span
                key={amenity}
                className="bg-secondary/10 text-secondary px-4 py-1 rounded-full text-sm font-semibold  "
              >
                {amenity}
              </span>
            ))}
          </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6 justify-end">
          <Link href={`/rooms/${listing._id}`}>
            <button className="px-6 py-3 bg-secondary text-white rounded-full flex items-center gap-2 transition">
              <FaArrowRight />
              View Room
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedRoomCard;
