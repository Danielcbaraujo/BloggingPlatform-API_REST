const express = require("express");
const postController = require("../controllers/postController");

const router = express.Router();

// Buscar todos os posts
router.get("/", postController.getAllPosts);

// Buscar um post por ID
router.get("/:id", postController.getPostById);

// Criar um novo post
router.post("/", postController.createPost);

// Atualizar um post
router.put("/:id", postController.updatePost);

// Deletar um post
router.delete("/:id", postController.deletePost);

module.exports = router;