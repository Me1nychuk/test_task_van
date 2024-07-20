import axios from "axios";

const instance = axios.create({
  baseURL: "https://6696d7e80312447373c3e1be.mockapi.io/advert",
});

export const fetchCars = async (page = 1) => {
  const { data } = await instance.get("?limit=4&page=" + page);
  return data;
};
