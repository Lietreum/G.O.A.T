const router = require("express").Router();
const {
  findAllBooks,
  detailBook,
  tambahBuku,
  hapusBuku,
  ubahBuku,
} = require("../controllers/BookController");
const {
  findAllUsers,
  detailUser,
  tambahUser,
  hapusUser,
  ubahUser,
} = require("../controllers/UserController");

//endpoint book
router.get("/books", findAllBooks);
router.get("/book/:id", detailBook);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book/:id", hapusBuku);
router.put("/book", ubahBuku);

//endpoint user
router.get("/user", findAllUsers);
router.get("/user/:id", detailUser);
router.post("/user", tambahUser);
router.delete("/user", hapusUser);
router.put("/user", ubahUser);

module.exports = router;