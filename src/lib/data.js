export const getAllRoom = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms`);
  const data = await res.json();
  return data;
};

export const getLatestRoom = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/latest`);
  const data = await res.json();
  return data;
};

export const getSingleRoom = async (roomId) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rooms/${roomId}`);
  const data = await res.json();
  return data;
};
