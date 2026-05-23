import AmenitiesFilter from "@/components/AllRoom/AmenitiesFilter";
import RoomCard from "@/components/AllRoom/RoomCard";
import SearchBar from "@/components/AllRoom/SearchBar";
import { getAllRoom } from "@/lib/data";
import Link from "next/link";

const Rooms = async ({ searchParams }) => {
  const sParams = await searchParams;
  // console.log(sParams);
  const searchTerm = sParams.searchTerm || "";
  const amenities = sParams.fAmenities || "";
  const getRooms = await getAllRoom(searchTerm , amenities);

  const emtyRooms = getRooms.length === 0;

  

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl lg:5xl font-bold text-secondary pb-10">
        All Rooms
      </h1>
      <SearchBar></SearchBar>
      <AmenitiesFilter></AmenitiesFilter>
      {emtyRooms && (
        <div className="flex flex-col items-center gap-4  text-secondary p-6 bg-accent rounded-2xl">
          <h1 className="text-2xl font-bold ">No Rooms Found</h1>
          <p className="text-lg">Plz Add a Room</p>
          <Link href="/addroom">
            <button className="btn rounded-full bg-secondary text-white ">
              Add A Room
            </button>
          </Link>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getRooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
