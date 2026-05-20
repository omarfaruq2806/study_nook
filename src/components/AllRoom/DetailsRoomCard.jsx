"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";

const DetailsRoomCard = ({ room }) => {
  const {
    name,
    description,
    image,
    floor,
    capacity,
    price,
    amenities,
    creator,
    bookingCount,
  } = room;

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const creatorId = creator?.id;
  const userId = session?.user?.id;

  const owner = creatorId == userId;
  console.log(owner);

  return (
    <div>
      <div className="rounded-3xl overflow-hidden shadow-lg shadow-secondary/10">
        <Image
          src={image || "hero.jpg"}
          alt={name}
          width={700}
          height={500}
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="bg-accent rounded-3xl p-6 shadow-md shadow-secondary/10 flex flex-col ">
        {/* Title */}
        <div className="mb-4">
          <h1 className="text-4xl font-bold">{name}</h1>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between border-y border-secondary/20 py-4 mb-6">
          <div>
            <p className="text-sm text-gray-500">Hourly Rate</p>
            <h2 className="text-3xl font-bold text-secondary">
              ${price}
              <small> /hr</small>
            </h2>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Total Booked</p>
            <h2 className="text-2xl font-bold ">{bookingCount || 0}</h2>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between bg-white rounded-2xl p-4">
            <span className="font-semibold text-gray-600">Floor</span>
            <span className="font-bold text-secondary">{floor}</span>
          </div>

          <div className="flex items-center justify-between bg-white rounded-2xl p-4">
            <span className="font-semibold text-gray-600">Capacity</span>
            <span className="font-bold text-secondary">{capacity} People</span>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-2 ">Description</h3>

          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Amenities */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-3">Amenities</h3>

          <div className="flex flex-wrap gap-3">
            {amenities?.map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-white border border-secondary/20 text-secondary text-sm font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons */}
        {owner ? (
          <div className="mt-auto flex flex-col sm:flex-row gap-4">
            <button className="flex-1 bg-secondary text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
              Book Now
            </button>

            <button className="flex-1 border border-secondary text-secondary py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition">
              Edit Room
            </button>

            <button className="flex-1 border border-red-400 text-red-400 py-3 rounded-full font-semibold hover:bg-red-400 hover:text-white transition">
              Delete
            </button>
          </div>
        ) : (
          <button className="flex-1 bg-secondary text-white py-3 rounded-full font-semibold hover:opacity-90 transition">
            Book Now
          </button>
        )}
      </div>
    </div>
  );
};

export default DetailsRoomCard;
