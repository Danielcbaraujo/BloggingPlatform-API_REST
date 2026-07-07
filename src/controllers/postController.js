const postService = require("../services/postService");

const getAllPosts = (req, res) => {
  res.status(200).json(post);
};



async function createPost(req, res) {

    const { title, content, category } = req.body;

    if (!title || !content || !category) {
        res.status(400).json({
            message: "Campos obrigatórios."
        });
    }
    const post = await postService.createPost({
    title,
    content,
    category,
    tags
});
    

    res.status(201).json(post);

}

async function getPostById(req, res) {

    const id = Number(req.params.id);

    const post = await postService.getPostById(id);

    if (!post) {
        return res.status(404).json({
            message: "Post não encontrado."
        });
    }

    return res.status(200).json(post);

}

module.exports = {
  getAllPosts,
  getPostById,
  createPost
};