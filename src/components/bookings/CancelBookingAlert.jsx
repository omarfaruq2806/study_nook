'use client';

const CancelBookingAlert = ({ booking }) => {
  const handleCancelBooking = async () => {
    console.log(booking, "from cancel booking alert");

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/bookings/${booking._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    });
    const data = await res.json();
    if(data.modifiedCount > 0) {
      window.location.reload();
    }
  };

  return (
    <div>
      <label
        htmlFor="my_modal_7"
        className="px-5 py-2 rounded-full bg-red-100 text-red-600 text-sm font-medium hover:bg-red-200 transition cursor-pointer"
      >
        Cancel Now
      </label>

      <input type="checkbox" id="my_modal_7" className="modal-toggle" />
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
        <label className="modal-backdrop" htmlFor="my_modal_7">
          Close
        </label>
      </div>
    </div>
  );
};

export default CancelBookingAlert;
