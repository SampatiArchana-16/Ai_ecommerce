import api from "./axios";

export const compareProducts = async (products) => {
  const response = await api.post("/compare", {
    products,
  });

  return response.data;
};