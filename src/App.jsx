import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => {
        setUser(response.data.results[0]);
      })
      .catch((error) => {
        console.error('There was an error fetching the user data!', error);
      });
  }, []);

  return (
    <div className="App min-h-screen flex items-center justify-center bg-gray-100">
      {user ? (
        <div className="max-w-sm w-full rounded overflow-hidden shadow-lg bg-white p-6">
          <img
            className="w-full h-48 object-cover rounded-md"
            src={user.picture.large}
            alt="User profile"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              {`${user.name.first} ${user.name.last}`}
            </div>
            <p className="text-gray-700 text-base text-center">
              <strong>Email: </strong>{user.email}
            </p>
            <p className="text-gray-700 text-base text-center">
              <strong>Location: </strong>{`${user.location.city}, ${user.location.country}`}
            </p>
            <p className="text-gray-700 text-base text-center">
              <strong>Phone: </strong>{user.phone}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-center mt-10">Loading...</p>
      )}
    </div>
  );
}

export default App;
