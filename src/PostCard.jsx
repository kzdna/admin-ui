import React, { useState } from "react";

function PostCard({ title, body }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div
      className="bg-white p-6 rounded-lg shadow transition-all duration-300 
                 hover:scale-105 hover:bg-red-50 hover:border hover:border-red-200 hover:shadow-md"
    >
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-800 mb-4">{body}</p>

      <button
        className={`${clicked ? "bg-red-600" : "bg-gray-500"} 
                    text-white p-2 rounded-md mt-3 transition-all duration-300 hover:bg-red-400`}
        onClick={handleClick}
      >
        {clicked ? "Tombol sudah diklik" : "Silahkan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
