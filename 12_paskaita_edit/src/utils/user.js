import axios from "axios";

export const showUserFullName = (user) => {
  return user ? `${user.name} ${user.surname}` : "";
};

export const checkUserCredentials = (users, checkingUser) => {
  return users.find(
    (user) =>
      user.email === checkingUser.email &&
      user.password === checkingUser.password
  );
};

// Add a new user
export const addUser = async (userData) => {
  try {
    const response = await axios.post("/db.json", userData);
    return response.data;
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
};

// Delete a user by ID
export const deleteUser = async (userId) => {
  try {
    const response = await axios.delete(`/db.json/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
};

// Update a user by ID
export const updateUser = async (userId, updatedData) => {
  try {
    const response = await axios.put(`/db.json/${userId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
};
<<<<<<< HEAD

// Retrieve all users
export const getUsers = async () => {
  try {
    const response = await axios.get("/db.json");
    return response.data;
  } catch (error) {
    console.error("Error retrieving users:", error);
    throw error;
  }
};

// Fetch People
export const fetchPeople = async () => {
  try {
    const response = await axios.get("/db.json");
    return response.data.people;
  } catch (error) {
    console.error("Error fetching people:", error);
    throw error;
  }
};

// Add Person
export const addPerson = async (personData) => {
  try {
    const response = await axios.post("/db.json/people", personData);
    return response.data;
  } catch (error) {
    console.error("Error adding person:", error);
    throw error;
  }
};

// Update Person
export const updatePerson = async (personId, updatedData) => {
  try {
    const response = await axios.put(`/db.json/people/${personId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error("Error updating person:", error);
    throw error;
  }
};

// Delete Person
export const deletePerson = async (personId) => {
  try {
    const response = await axios.delete(`/db.json/people/${personId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting person:", error);
    throw error;
  }
};
=======
>>>>>>> c454a3bf461c29c4c4ad80a50385e064507697b5
