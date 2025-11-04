import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getPosts } from "./Services";

function Exercise() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const ambilData = async () => {
      const data = await getPosts();
      setPosts(data);
    };
    ambilData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-700">
        Post Cards
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5  mx-auto text-center place-items-stretch">
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default Exercise;
