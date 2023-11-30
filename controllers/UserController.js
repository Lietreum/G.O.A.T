const { User } = require("../models");

const findAllUsers = async (req, res) => {
  try {
    //ambil data dari database
    const data = await User.findAll();

    //tampilkan
    res.json({
      message: "Ini dari router",
      data: data,
    });
  } catch (error) {
    res.json({
      message: "error mendapatkan data user",
    });
  }
};

const detailUser = async (req, res) => {
  // get id dari request
  let id = parseInt(req.params.id);

  //ambil data dari database
  const data = await User.findByPk(id);

  //tampilkan
  res.json({
    message: "Ini dari router",
    data: data,
  });
};

const tambahUser = async (req, res) => {
  try {
    //ambil data dari request
    const data = req.body;

    //insert kedatabase
    const result = await User.create(data);

    //tampilkan status
    res.json({
      result: result,
    });
  } catch (error) {
    res.json({
      message: "error :" + error,
    });
  }
};

const hapusUser = async (req, res) => {
  try {
    //ambil data dari request
    const id = req.body.id;

    //hapus data dari database
    const result = await User.destroy({
      where: {
        id: id,
      },
    });

    //tampilkan status
    res.json({
      message: "Data berhasil dihapus",
    });
  } catch (error) {
    res.json({
      message: "error :" + error,
    });
  }
};

const ubahUser = async (req, res) => {
  try {
    //ambil data dari request
    const id = req.body.id;

    const newData = req.body;

    //ubah data dari database
    const result = await Book.update(newData, {
      where: {
        id: id,
      },
    });

    //tampilkan status dan data baru
    res.json({
      message: "Data berhasil dirubah",
      data: newData,
    });
  } catch (error) {
    res.json({
      message: "error :" + error,
    });
  }
};

module.exports = { findAllUsers, detailUser, tambahUser, hapusUser, ubahUser };