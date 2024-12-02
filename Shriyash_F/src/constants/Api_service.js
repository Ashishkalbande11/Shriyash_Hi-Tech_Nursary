const API_URL = "http://localhost:8080/shriyash-nursary";

export const registerUser = async (userData) => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    return await response.status;
  } catch (error) {
    console.error("Error during registration:", error);
    return { success: false, message: "Server error" };
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const result =  await response.status;
    console.log(result);
    return result;
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, message: "Server error" };
  }
};
