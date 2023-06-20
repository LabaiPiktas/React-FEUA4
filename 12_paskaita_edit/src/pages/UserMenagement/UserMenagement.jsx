import React, { useEffect, useState } from "react";
import { USERMENAGEMENT_ROUTE } from "../../routes/const";
import { getUsers, addUser, deleteUser, updateUser, fetchPeople, addPerson, updatePerson, deletePerson } from "../../utils/user";

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      // Call the getUsers function to retrieve the existing users
      const fetchedUsers = await getUsers();

      setUsers(fetchedUsers);
      console.log("Users fetched:", fetchedUsers);
      // Handle success or update the UI accordingly
    } catch (error) {
      // Handle error or display error message
    }
  };

  const handleAddUser = async () => {
    try {
      // Create a new user object with the required data
      const newUser = {
        name: "John",
        surname: "Doe",
        email: "johndoe@example.com",
        password: "password123",
        // Additional user properties...
      };

      // Call the addUser function to add the new user
      const addedUser = await addUser(newUser);

      console.log("User added:", addedUser);
      // Handle success or update the UI accordingly
    } catch (error) {
      // Handle error or display error message
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      // Call the deleteUser function to delete the user by ID
      const deletedUser = await deleteUser(userId);

      console.log("User deleted:", deletedUser);
      // Handle success or update the UI accordingly
    } catch (error) {
      // Handle error or display error message
    }
  };

  const handleUpdateUser = async (userId, updatedData) => {
    try {
      // Call the updateUser function to update the user by ID
      const updatedUser = await updateUser(userId, updatedData);

      console.log("User updated:", updatedUser);
      // Handle success or update the UI accordingly
    } catch (error) {
      // Handle error or display error message
    }
  };

  return (
    <div>
      {/* Display existing users */}
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.name}</p>
          <p>Surname: {user.surname}</p>
          <p>Email: {user.email}</p>
          {/* Additional user properties... */}
        </div>
      ))}

      {/* UI elements and event handlers for managing users */}
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={() => handleDeleteUser(1)}>Delete User</button>
      <button onClick={() => handleUpdateUser(1, { name: "Updated Name" })}>
        Update User
      </button>
    </div>
  );
};

export default UserManagement;
