const router = require("express").Router();
const { findAllBooks, detailBook, tambahBuku, hapusbuku, memperbaruibuku } = require('../controllers/BookController');

router.get("/books", findAllBooks);
router.get("/findbook", detailBook);
router.post("/book", tambahBuku);
router.delete("/book", hapusbuku);
router.put("/book", memperbaruibuku)

const { findAllUsers,detailUser, tambahUser, deleteUser, updateUser} = require('../controllers/UserController');

router.get("/users", findAllUsers);
router.get("/finduser", detailUser);
router.post("/user", tambahUser);
router.delete("/user", deleteUser);
router.put("/user", updateUser);

module.exports = router;