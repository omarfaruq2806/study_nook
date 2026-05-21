import React from "react";

const BookRoomModal = () => {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="px-6 w-full  bg-secondary text-white py-3 rounded-full font-semibold hover:opacity-90 transition"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default BookRoomModal;
