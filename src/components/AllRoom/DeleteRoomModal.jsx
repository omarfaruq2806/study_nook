"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const DeleteRoomModal = ({ room }) => {
  const { _id, name } = room;
  const router = useRouter();
  const handleDelete = async (e) => {
    e.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();
    if (data.deletedCount > 0) {
      toast.success("Room deleted successfully");
      router.push("/");
    }
  };

  return (
    <div>
      <button
        className="flex-1 border border-red-400 text-red-400 py-3 rounded-full font-semibold hover:bg-red-400 hover:text-white transition "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Delete Room
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box space-y-4 max-w-100">
          <h1 className="text-lg font-bold ">
            Are you sure you want to delete "{name}" !!!
          </h1>
          <div className="flex gap-4 justify-end">
            <button className="btn rounded-full bg-secondary text-white">
              Cancel
            </button>
            <button
              className="btn rounded-full bg-red-400 text-white hover:bg-red-600"
              onClick={handleDelete}
            >
              Confirm Delete
            </button>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default DeleteRoomModal;
