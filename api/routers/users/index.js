const express = require("express");

const db = require("../../../data/config.js");

const router = express.Router();

// GET all users 🚀
router.get("/", async (req, res) => {
  try {
    const projects = await db("users");
    res.status(200).json(projects);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error getting users 💩",
      error: err
    });
  }
});

// GET a specific user by id 🍒
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const [project] = await db("users").where({ id });
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({
        message: "Could not find the specified food item in database 🤷‍"
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Error retrieving the requested info from database 💩",
      error: err
    });
  }
});

module.exports = router;
