import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

   return (
    <div className="user">
      <h1>User Page</h1>
      <p>User ID: {id}</p>
      {user && (
        <div>
          <p>User Name: {user.name}</p>
          <p>User Email: {user.email}</p>
          {/* Include additional user information as needed */}
        </div>
      )}
    </div>
  );
};

export default User;
