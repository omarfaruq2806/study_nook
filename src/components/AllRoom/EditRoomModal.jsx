import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const EditRoomModal = ({ room }) => {
  const router = useRouter();

  const {
    name,
    description,
    image,
    floor,
    capacity,
    price,
    // amenities,
    creator,
  } = room;

  const amenities = [
    "whiteboard",
    "Projector",
    "WiFi",
    "Power Outlets",
    "Quiet Zone",
    "Air Conditioning",
  ];

  const {
    data: session,
    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();

  const handleEditRoom = async (e) => {
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
      creator: creator,
      user: session?.user,
    };

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/rooms/${room._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearar ${tokenData?.token}`,
        },
        body: JSON.stringify(roomData),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Room updated successfully");
      window.location.reload();
    }
  };

  return (
    <div>
      <button
        className="px-6 w-full border border-secondary text-secondary py-3 rounded-full font-semibold hover:bg-secondary hover:text-white transition"
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Edit Room
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-accent  rounded-2xl  shadow-md shadow-secondary/30 md:w-md mx-auto">
          <form onSubmit={handleEditRoom} className="p-4 ">
            <h1 className="text-3xl font-bold mb-4 text-center text-secondary">
              Edit Room
            </h1>

            {/* Room Name */}
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2 ">
                Room Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
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
                defaultValue={description}
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
                defaultValue={image}
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
                defaultValue={price}
                className="w-full py-2 px-3 border border-secondary/30 rounded-full focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition"
                placeholder="e.g. 5"
              />
            </div>

            <div className="flex gap-4">
              {/* Floor */}
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Floor
                </label>
                <input
                  type="text"
                  name="floor"
                  defaultValue={floor}
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
                  defaultValue={capacity}
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
              Save Updates
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default EditRoomModal;
