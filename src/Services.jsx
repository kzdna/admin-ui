import { postsData } from "./postsData";

export const getPosts = async () => {
  try {
    return postsData.map((post) => ({
      title: post.title,
      body: post.body,
      userId: post.userId,
      id: post.id,
    }));
  } catch (error) {
    console.error("[Services] Gagal mengambil data lokal:", error.message);
    throw error;
  }
};
