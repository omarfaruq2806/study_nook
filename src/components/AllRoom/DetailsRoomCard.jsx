"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import EditRoomModal from "./EditRoomModal";
import DeleteRoomModal from "./DeleteRoomModal";
import BookRoomModal from "./BookRoomModal";
import Link from "next/link";

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
    total,
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
            <h2 className="text-2xl font-bold ">{total >= 0 ? total : 0}</h2>
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
          <div className="mt-auto flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full">
              <BookRoomModal room={room}></BookRoomModal>
            </div>

            <div className="w-full">
              <EditRoomModal room={room}></EditRoomModal>
            </div>

            <div className="w-full">
              <DeleteRoomModal room={room}></DeleteRoomModal>
            </div>
          </div>
        ) : !session  ? (
          <div className="w-full">
            <Link href="/login">
              <button className="btn  w-full bg-secondary rounded-full text-white">Login to Book</button>
            </Link>
          </div>
        ) : (
          <div className="mt-auto flex flex-col md:flex-row gap-4 justify-between">
            <div className="w-full">
              <BookRoomModal room={room}></BookRoomModal>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsRoomCard;
