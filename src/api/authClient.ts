import AsyncStorage from "@react-native-async-storage/async-storage";
import axiosObj from "@/api/apiClient";

// Save the token
const saveToken = async (token: string): Promise<void> => {
  try {
    await AsyncStorage.setItem("userToken", token);
  } catch (error) {
    console.error("Error saving token", error);
  }
};

// Fetch the token from the server
export const fetchToken = async (): Promise<string | null> => {
  try {
    const response = await axiosObj.get("/get-token");
    if (response.data.token) {
      await saveToken(response.data.token);
      return response.data.token;
    } else {
      console.error("Failed to fetch token", response.data.message);
      return null;
    }
  } catch (error) {
    console.error("Error fetching token", error);
    return null;
  }
};

// Get the token
export const getToken = async (): Promise<string | null> => {
  try {
    const token = await AsyncStorage.getItem("userToken");
    return token;
  } catch (error) {
    console.error("Error getting token", error);
    return null;
  }
};

// Ensure token is present and valid
export const ensureToken = async (): Promise<string | null> => {
  const token = await getToken();
  if (!token) {
    return await fetchToken();
  }
  return token;
};
