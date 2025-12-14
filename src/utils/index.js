import axios from "axios";

//image hosting using Imgbb
export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IGMBB_API_KEY}`,
    formData
  );

  return data?.data?.display_url;
};

//Set or Update user in Database
export const setOrUpdateUser = async (userData) => {
  const { data } = await axios.post(
    `${import.meta.env.VITE_SERVER_URL}/user`,
    userData
  );
  return data;
};
