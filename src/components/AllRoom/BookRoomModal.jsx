"use client";

import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import toast from "react-hot-toast";

const BookRoomModal = ({ room }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const user = session?.user;
  const rate = room?.price;
  const totalTime = parseInt(endTime) - parseInt(startTime);
  const total = rate * totalTime;
  // if(!startTime || !endTime) return
  // if(parseInt(startTime) === parseInt(endTime)){
  //   console.log('plzz enter valid time');
  // }
  // if (parseInt(startTime) >= parseInt(endTime)) {
  //   console.log("time in invalid");
  // }

  const handleBooking = async (e) => {
    e.preventDefault();
    const data = e.target;
    if (totalTime === 0) {
      toast.error("Please select valid time slot");
      return;
    }
    if (parseInt(endTime) - parseInt(startTime) < 1) {
      toast.error("Minimum booking duration is 1 hour");
      return;
    }
    const bookingData = {
      roomId: room._id,
      roomName: room.name,
      roomImage: room.image,
      roomPrice: room.price,
      roomCapacity: room.capacity,
      roomFloor: room.floor,
      roomDescription: room.description,
      roomAmenities: room.amenities,
      date: new Date().toISOString().split("T")[0],
      bookingDate: data.bookingdate.value,
      startTime: parseInt(startTime),
      endTime: parseInt(endTime),
      notes: data.notes.value,
      total: total,
      status: "confirmed",
      user: user,
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearar ${tokenData?.token}`,
      },
      body: JSON.stringify(bookingData),
    });
    const result = await res.json();
    if (result.insertedId) {
      toast.success("Room Booked Successfully");
      window.location.reload();
      document.getElementById("my_modal_5").close();
    } else {
      toast.error("this room is already booked for this time slot");
      return;
    }
  };

  return (
    <div className="">
      <button
        className="px-6 w-full  bg-secondary text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box bg-accent">
          <form onSubmit={handleBooking}>
            <div className="space-y-4 flex flex-col gap-1 p-4 ">
              <label>Select Booking Date</label>
              <input
                type="date"
                name="bookingdate"
                required
                min={new Date().toISOString().split("T")[0]}
              />
              <label>Select Start Time</label>
              <select
                name="star-time"
                required
                onChange={(e) => setStartTime(e.target.value)}
              >
                {timeSlots.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
              <label>Select End Time</label>
              <select
                name="end-time"
                onChange={(e) => setEndTime(e.target.value)}
              >
                {timeSlots
                  .filter((time) => time > startTime)
                  .map((time) => {
                    return (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    );
                  })}
              </select>
              <p>{total === 0 ? "" : `Total: ${total}$`}</p>
              <label>Notes</label>
              <textarea name="notes" type="text" className="border "></textarea>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BookRoomModal;
