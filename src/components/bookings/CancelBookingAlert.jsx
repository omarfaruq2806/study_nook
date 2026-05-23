"use client";

import { authClient } from "@/lib/auth-client";

const CancelBookingAlert = ({ booking }) => {
  const modalId = `cancel-modal-${booking._id}`;
  console.log("modal id", modalId);

  const handleCancelBooking = async () => {
    console.log(booking, "from cancel booking alert");
    console.log(booking._id);

    const { data: tokenData } = await authClient.token();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/bookings/${booking._id}`,
      {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `bearar ${tokenData?.token}`,
        },
        body: JSON.stringify(booking),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      window.location.reload();
      toast.success("Booking canceled successfully");
      console.log(data._id, "data ");
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <label
        htmlFor={modalId}
        className="px-5 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition cursor-pointer"
      >
        Cancel Now
      </label>

      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box p-5">
          <h3 className="font-bold text-lg">
            Are you sure you want to cancel this booking ?
          </h3>
          <div className=" flex justify-end">
            <button
              className="px-5 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition mt-5"
              onClick={handleCancelBooking}
            >
              Cancel it
            </button>
            <button className="px-5 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium hover:bg-green-200 transition mt-5 ml-3">
              {" "}
              Keep it
            </button>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor={modalId}>
          Close
        </label>
      </div>
    </div>
  );
};

export default CancelBookingAlert;
