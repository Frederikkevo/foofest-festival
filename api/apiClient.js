import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://daviatkea.github.io/FooFest-Exam-API",
    headers: { "Content-Type": "application/json" },
  });
  

// Hent data om bands
export const getBands = async () => {
  const response = await apiClient.get("/bands");
  return response.data;
};

// Hent tidsplan
export const getSchedule = async () => {
  const response = await apiClient.get("/schedule");
  return response.data;
};

// Hent events (valgfrit)
export const getEvents = async () => {
  const response = await apiClient.get("/events");
  return response.data;
};

export default apiClient;
