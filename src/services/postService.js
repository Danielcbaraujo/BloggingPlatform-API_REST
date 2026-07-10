const prisma = require("../config/prisma");

// Buscar todos os posts
async function getAllPosts() {
  const posts = await prisma.post.findMany();

  return posts;
}

// Buscar um post por ID
async function getPostById(id) {
  const post = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  return post;
}

// Criar um novo post
async function createPost(data) {
  const post = await prisma.post.create({
    data,
  });

  return post;
}

// Atualizar um post
async function updatePost(id, data) {
  const postExists = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!postExists) {
    return null;
  }

  const updatedPost = await prisma.post.update({
    where: {
      id,
    },
    data,
  });

  return updatedPost;
}

// Deletar um post
async function deletePost(id) {
  const postExists = await prisma.post.findUnique({
    where: {
      id,
    },
  });

  if (!postExists) {
    return null;
  }

  await prisma.post.delete({
    where: {
      id,
    },
  });

  return true;
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
