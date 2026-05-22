import BookingCard from "@/components/bookings/BookingCard";
import { auth } from "@/lib/auth";
import { getMyBookings } from "@/lib/data";
// import { getMyBookings } from "@/lib/data";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Your Bookings | Study Nook",
  description: "Find quiet study rooms, book instantly, and boost your productivity.",
};

const page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const userId = session?.user?.id;
  const myBookings = await getMyBookings(userId);
  console.log(myBookings);

  const emptyBookings = myBookings.length === 0;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-secondary text-center p-4">
        My Bookings
      </h1>
      {emptyBookings && (
        <div className="flex flex-col items-center gap-4  text-secondary p-6 bg-accent rounded-2xl">
          <h1 className="text-2xl font-bold ">
            No Bookings Found
          </h1>
          <p className="text-lg">plz book a room</p>
          <Link href="/rooms">
            <button className="btn rounded-full bg-secondary text-white ">Explore Rooms </button>
          </Link>
        </div>
      )}
      {myBookings.map((booking) => (
        <BookingCard key={booking._id} booking={booking}></BookingCard>
      ))}
    </div>
  );
};

export default page;
