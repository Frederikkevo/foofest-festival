const API_BASE_URL = "https://hill-mirror-era.glitch.me";

/**
 * Helper function to fetch data from API
 * @param {string} endpoint - The API endpoint (e.g., "/schedule", "/artists")
 * @returns {Promise<any>} - Returns the parsed JSON data
 */
export async function fetchData(endpoint) {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

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
    throw error; // Rethrow for handling in components
  }
}
