import RoomCard from "@/components/AllRoom/RoomCard";
import SearchBar from "@/components/AllRoom/SearchBar";
import { getAllRoom } from "@/lib/data";

const Rooms = async () => {
  const getRooms = await getAllRoom();
  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-center text-4xl lg:5xl font-bold text-secondary pb-10">
        All Rooms
      </h1>
      <SearchBar></SearchBar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {getRooms.map((room) => (
          <RoomCard key={room._id} room={room}></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
