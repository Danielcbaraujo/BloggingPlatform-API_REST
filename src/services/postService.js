const prisma = require("../config/prisma");

async function getAllPosts() {
  const posts = await prisma.post.findMany();

  return posts;
}

async function createPost(data) {
  const post = await prisma.post.create({
    data: data,
  });

  return post;
}

async function getPostById(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return post;
}

module.exports = {
  getAllPosts,
  createPost,
  getPostById,
}