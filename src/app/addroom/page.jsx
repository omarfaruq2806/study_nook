"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { FaGoogle } from "react-icons/fa";

const amenities = [
  "whiteboard",
  "Projector",
  "WiFi",
  "Power Outlets",
  "Quiet Zone",
  "Air Conditioning",
];

const AddRoomForm = () => {
  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  if (isPending) return <p className=" text-2xl flex items-center justify-center gap-2"> <span className="loading loading-spinner loading-xl "></span> Loading......</p>

 

  const handleAddRoom = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const roomData = {
      name: formData.get("name"),
      description: formData.get("description"),
      image: formData.get("image"),
      floor: formData.get("floor"),
      capacity: formData.get("capacity"),
      price: formData.get("price"),
      amenities: formData.getAll("amenities"),
      createdAt: new Date(),
      total: 0,
      creator: {
        id: session?.user?.id,
        name: session?.user?.name,
        email: session?.user?.email,
      },
    };

     const {data: tokenData} = await authClient.token();
     console.log(tokenData , 'from add room token');

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${tokenData?.token}`,
      },
      body: JSON.stringify(roomData),
    });
    const data = await res.json();

    if (data.insertedId) {
      toast.success("Room added successfully");
    }
    // if(!res.ok){
    //   // toast.error("Something went wrong");
    //   console.log(res);
    // }
  };

  return (
    <div>
      <form
        onSubmit={handleAddRoom}
        className="bg-accent p-4 rounded-2xl  shadow-md shadow-secondary/30 md:w-md mx-auto my-10"
      >
        <h1 className="text-3xl font-bold mb-4 text-center text-secondary">
          Add Study Room
        </h1>

        {/* Room Name */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2 ">
            Room Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter room name"
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Description
          </label>
          <textarea
            name="description"
            required
            className="w-full py-2 px-3 border border-secondary/30 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter room description"
          />
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            required
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="Enter image URL"
          />
        </div>

        {/* Hourly Rate */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Hourly Rate ($)
          </label>
          <input
            type="text"
            name="price"
            className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
            placeholder="e.g. 5"
          />
        </div>

        <div className="flex gap-4">
          {/* Floor */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Floor</label>
            <input
              type="text"
              name="floor"
              className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
              placeholder="e.g. 3rd Floor"
            />
          </div>

          {/* Capacity */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Capacity
            </label>
            <input
              type="text"
              name="capacity"
              className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
              placeholder="e.g. 4"
            />
          </div>
        </div>

        {/* Amenities */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Amenities
          </label>
          <div className="flex items-center gap-2 flex-wrap ">
            {amenities.map((amenity, ind) => (
              <div
                key={ind}
                className="flex gap-4 p-2 border border-secondary/30 rounded-2xl"
              >
                <input type="checkbox" name="amenities" value={amenity} />
                <span>{amenity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full  text-secondary py-2  border border-secondary/30 rounded-full font-bold hover:opacity-90 transition"
        >
          Add Room
        </button>
      </form>
    </div>
  );
};

export default AddRoomForm;
