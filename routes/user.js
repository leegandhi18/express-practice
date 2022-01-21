const express = require("express");
const router = express.Router();

const users = [
  { id: 0, name: "lee" },
  { id: 1, name: "kim" },
  { id: 2, name: "jang" },
];

router.get("/", (req, res) => {
  res.status(200).send(users);
});


router.get("/like", (req, res) => {
  res.send("안녕하세요.");
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;

  // if (users[id]) res.status(200).send(users[id]);
  // else res.status(400).send("값이 없음");
  users[id]
    ? res.status(200).send(users[id])
    : res.status(400).send("값이 없음");
});

router.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});


router.post("/", (req, res) => {
  // console.log(req.body);
  const newUserData = req.body;
  users.push(newUserData);
  res.send();
});

module.exports = router;
