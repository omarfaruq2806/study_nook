import Image from "next/image";
import React from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaLayerGroup,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";
import CancelBookingAlert from "./CancelBookingAlert";
const BookingCard = async ({ booking }) => {
  const {
    roomImage,
    roomName,
    roomPrice,
    bookingDate,
    roomCapacity,
    startTime,
    endTime,
    notes,
    roomFloor,
    roomAmenities,
    total,
    status,
  } = booking;

  
  return (
    <div className="mb-5 container mx-auto px-4">
      <div className="bg-white border border-secondary/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 grid grid-cols-1 md:grid-cols-3">
        {/* Image */}
        <div className="relative h-[220px] md:h-full overflow-hidden">
          <Image
            src={roomImage}
            alt={roomName}
            fill
            className="object-cover hover:scale-105 transition duration-500"
          />

          <div className="absolute top-3 right-3">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-medium shadow">
              ${roomPrice}/hr
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:col-span-2 flex flex-col justify-between">
          {/* Top */}
          <div>
            {/* Title */}
            <div className="flex items-center justify-between mb-3">
              <h1 className="text-xl font-bold text-gray-800">{roomName}</h1>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  status === "confirmed"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status}
              </span>
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
              <div className="bg-secondary/5 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-secondary mb-1 text-sm">
                  <FaUsers />
                  <p>Capacity</p>
                </div>

                <h3 className="font-semibold text-sm text-gray-800 truncate">
                  {roomCapacity}
                </h3>
              </div>

              <div className="bg-secondary/5 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-secondary mb-1 text-sm">
                  <FaLayerGroup />
                  <p>Floor</p>
                </div>

                <h3 className="font-semibold text-sm text-gray-800 truncate">
                  {roomFloor}
                </h3>
              </div>

              <div className="bg-secondary/5 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-secondary mb-1 text-sm">
                  <FaCalendarAlt />
                  <p>Date</p>
                </div>

                <h3 className="font-semibold text-sm text-gray-800">
                  {bookingDate}
                </h3>
              </div>

              <div className="bg-secondary/5 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-secondary mb-1 text-sm">
                  <FaClock />
                  <p>Time</p>
                </div>

                <h3 className="font-semibold text-sm text-gray-800">
                  {startTime}:00 - {endTime}:00
                </h3>
              </div>
            </div>

            {/* Amenities */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {roomAmenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gray-50 rounded-xl p-3 mb-4">
              <h2 className="font-semibold text-sm text-gray-800 mb-1">
                Notes
              </h2>

              <p className="text-xs text-gray-600 line-clamp-2">{notes}</p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t pt-3">
            <div>
              <p className="text-xs text-gray-500">Total Payment</p>

              <h1 className="text-2xl font-bold text-secondary">${total}</h1>
            </div>

            {status === "confirmed" &&
            bookingDate >= new Date().toISOString().split("T")[0] ? (
              <CancelBookingAlert booking={booking} />
            ) : (
              <p className="text-xs text-gray-500">
                You can't cancel this booking
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
