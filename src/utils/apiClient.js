const API_BASE_URL = "https://hill-mirror-era.glitch.me";

/**
 * @param {string} endpoint - 
 * @returns {Promise<any>} - 
 */
export async function fetchData(endpoint) {
    console.log("endpoint: ", endpoint)
  try {
    const response = await fetch(`${API_BASE_URL}/${endpoint}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Invalid content type. Expected JSON.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching ${endpoint}:`, error.message);
    throw error; 
  }
}
