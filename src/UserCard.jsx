import React, { useState } from 'react';

function UserCard({ name, email, street, city }) {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(true);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      <button
        className={`${clicked ? "bg-green-500" : "bg-gray-300"} text-white p-2 rounded-md mt-3 transition-colors`}
        onClick={handleClick}
      >
        {clicked ? "Tombol sudah diklik" : "Silahkan Klik"}
      </button>
    </div>
  );
}

export default UserCard;
