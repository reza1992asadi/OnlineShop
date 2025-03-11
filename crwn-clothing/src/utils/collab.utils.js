const API_URL = 'http://localhost:3000';

export const apiRequest = async (endpoint, method = "GET", body = null, token = null) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    // If a token is provided, add it to the Authorization header
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_URL}/${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : null, // Convert body to JSON if provided
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }

    return data; // Return the API response
  } catch (error) {
    console.error("API Request Error:", error);
    throw error;
  }
};

export const signup = async (firstname, lastname, username, email, password) => {
  return apiRequest("users/signup", "POST", {firstname, lastname, username, email, password}); 

};

export const login = async (email, password) => {
  return apiRequest("users/login", "POST", {email, password}); 
}

export const quickTest = async () => {
  try {
    const result = await signup("reza", "asadi", "ra","rezayo@gmail.com", "1234");
    console.log("sign up success:", result);
  } catch (error) {
    console.error("sign up failed:", error.message);
  }
};