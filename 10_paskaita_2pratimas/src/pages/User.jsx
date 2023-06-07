import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../UserContext";

const User = () => {
  const { id } = useParams();
  const userContextValue = useContext(UserContext);

  return (
    <div className="user">
      <h1>User Page</h1>
      <p>User ID: {id}</p>
      <p>User Context Value: {userContextValue}</p>
    </div>
  );
};

export default User;
