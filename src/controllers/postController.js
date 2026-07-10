const postService = require("../services/postService");

async function getAllPosts(req, res) {
  const posts = await postService.getAllPosts();

  res.status(200).json(posts);
}

async function createPost(req, res) {
 const { title, content, category, tags } = req.body;

  if (!title || !content || !category) {
    res.status(400).json({
      message: "Campos obrigatórios.",
    });
  }
  const post = await postService.createPost({
    title,
    content,
    category,
    tags,
  });

  res.status(201).json(post);
}

async function getPostById(req, res) {
  const id = Number(req.params.id);

  const post = await postService.getPostById(id);

  if (!post) {
    return res.status(404).json({
      message: "Post não encontrado.",
    });
  }

  return res.status(200).json(post);
}

async function updatePost(req, res) {
  const id = Number(req.params.id);

  const { title, content, category, tags } = req.body;

  if (!title || !content || !category) {
    return res.status(400).json({
      message: "Title, content e category são obrigatórios.",
    });
  }

  const post = await postService.updatePost(id, {
    title,
    content,
    category,
    tags,
  });

  if (!post) {
    return res.status(404).json({
      message: "Post não encontrado.",
    });
  }

  return res.status(200).json(post);
}

async function deletePost(req, res) {
  const id = Number(req.params.id);

  const deleted = await postService.deletePost(id);

  if (!deleted) {
    return res.status(404).json({
      message: "Post não encontrado.",
    });
  }

  return res.sendStatus(204);
}

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
