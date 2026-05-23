// This file contains functions to fetch data from the API endpoints.
export const getAllRoom = async (searchTerm = "", amenities = "") => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/rooms?search=${searchTerm}&amenities=${amenities}`,
  );
  const data = await res.json();
  return data;
};

// for home page latest rooms
export const getLatestRoom = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/latest`);
  const data = await res.json();
  return data;
};

// for details page single room
export const getDetailsRoom = async (roomId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}`);
  const data = await res.json();
  return data;
};

// for my listings page
export const getMyListings = async (userId, token) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/mylistings/${userId}`,
    {
      headers: {
        authorization: `bearar ${token}`,
      },
    },
  );
  const data = await res.json();
  return data;
};

// for my bookings page
export const getMyBookings = async (userId) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/bookings/${userId}`,
  );
  const data = await res.json();
  return data;
};
