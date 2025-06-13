const connection = require("../data/db");

const index = (req, res) => {
  const sql = "SELECT * FROM posts";

  connection.query(sql, (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ status: 500, success: "error", message: "Database error" });
      return;
    }

    res.status(200).json({ status: 200, success: "ok", data: results });
  });
};

const show = (req, res) => {
  const sql = "SELECT * FROM posts WHERE id = ?";

  const id = parseInt(req.params.id);
  connection.query(sql, [id], (err, results) => {
    if (err) {
      res
        .status(500)
        .json({ status: 500, success: "error", message: "Database error" });
      return;
    }
    if (results.length === 0) {
      res
        .status(404)
        .json({ status: 404, success: "ok", message: "Item not found" });
      return;
    }
    res.status(200).json({ status: 200, success: "ok", data: results[0] });
  });
};

const store = (req, res) => {
  // const { title, content, image, tags } = req.body; // destructure body of request
  // let maxId = 0;
  // for (const post of posts) {
  //   if (post.id > maxId) maxId = post.id;
  // }
  // const postId = maxId + 1; // generate post id
  // const post = { id: postId, title, content, image, tags }; // create new post
  // posts.push(post); // add new post in array
  // res.status(201).json({ status: 201, success: "ok", data: post });
};

const update = (req, res) => {
  // const id = parseInt(req.params.id);
  // console.log("richiesta la modifica del post: " + id);
  // const originalPost = posts.find((post) => post.id === id);
  // if (!originalPost) {
  //   const error = new Error("Item not found");
  //   error.statusCode = 404;
  //   throw error;
  // }
  // const title = req.body.title ?? originalPost.title;
  // const content = req.body.content ?? originalPost.content;
  // const image = req.body.image ?? originalPost.image;
  // const tags = req.body.tags ?? originalPost.tags;
  // const malformatElements = [];
  // if (typeof title !== "string" || title.length < 3) {
  //   malformatElements.push("title");
  // }
  // if (typeof content !== "string" || content.length < 3) {
  //   malformatElements.push("content");
  // }
  // if (typeof image !== "string") {
  //   malformatElements.push("image");
  // }
  // if (!Array.isArray(tags)) {
  //   malformatElements.push("tags");
  // }
  // if (malformatElements.length) {
  //   const error = new Error("element malformat");
  //   error.statusCode = 400;
  //   error.data = { malformatElements };
  //   throw error;
  // }
  // const updatedPost = { id: originalPost.id, title, content, image, tags };
  // posts.splice(posts.indexOf(originalPost), 1, updatedPost);
  // res.status(200).json({ status: 200, success: "ok", data: updatedPost });
};

const modify = (req, res) => {
  // const id = parseInt(req.params.id);
  // console.log("richiesta la modifica del post: " + id);
  // const originalPost = posts.find((post) => post.id === id);
  // if (!originalPost) {
  //   const error = new Error("Item not found");
  //   error.statusCode = 404;
  //   throw error;
  // }
  // const title = req.body.title ?? originalPost.title;
  // const content = req.body.content ?? originalPost.content;
  // const image = req.body.image ?? originalPost.image;
  // const tags = req.body.tags ?? originalPost.tags;
  // const malformatElements = [];
  // if (typeof title !== "string" || title.length < 3) {
  //   malformatElements.push("title");
  // }
  // if (typeof content !== "string" || content.length < 3) {
  //   malformatElements.push("content");
  // }
  // if (typeof image !== "string") {
  //   malformatElements.push("image");
  // }
  // if (!Array.isArray(tags)) {
  //   malformatElements.push("tags");
  // }
  // if (malformatElements.length) {
  //   const error = new Error("element malformat");
  //   error.statusCode = 400;
  //   error.data = { malformatElements };
  //   throw error;
  // }
  // originalPost.title = title;
  // originalPost.content = content;
  // originalPost.image = image;
  // originalPost.tags = tags;
  // res.status(200).json({ status: 200, success: "ok", data: originalPost });
};

const destroy = (req, res) => {
  const sql = "DELETE FROM posts WHERE id = ?";
  const id = parseInt(req.params.id);
  connection.query(sql, [id], (err, results) => {
    console.log(results);

    if (err) {
      res
        .status(500)
        .json({ status: 500, success: "error", message: "Database error" });
      return;
    }
    if (results.affectedRows === 0) {
      res
        .status(404)
        .json({ status: 404, success: "ok", message: "Item not found" });
      return;
    }
    res.status(204).send();
  });
};

module.exports = { index, show, store, update, modify, destroy };
