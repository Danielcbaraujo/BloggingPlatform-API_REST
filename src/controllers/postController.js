const getAllPosts = (req, res) => {
  res.status(200).json({
    message: "Lista de Posts",
  });
};

module.exports = {
  getAllPosts,
};
