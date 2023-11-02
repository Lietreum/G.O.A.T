const { User } = require("../models");

const findAllUsers = async (req, res) => {
  try {
    const data = await User.findAll();
    res.json({
      message: "Data retrieved successfully",
      data: data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching user data: " + error.message,
    });
  }
};

const detailUser = async (req, res) => {
  try {
    let id = parseInt(req.params.id);
    const data = await User.findByPk(id);
    if (data) {
      res.json({
        message: "User found successfully",
        data: data,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while fetching user data: " + error.message,
    });
  }
};

const tambahUser = async (req, res) => {
  try {
    const data = req.body;
    const result = await User.create(data);
    res.json({
      message: "User added successfully",
      result: result,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while adding user: " + error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const id = req.body.id;
    const result = await User.destroy({
      where: {
        id: id,
      },
    });
    res.json({
      message: "User successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error while deleting user: " + error.message,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const id = req.body.id;
    const newData = req.body;
    const result = await User.update(newData, {
      where: {
        id: id,
      },
    });
    if (result[0] === 1) {
      res.json({
        message: "User updated successfully",
        data: newData,
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error while updating user: " + error.message,
    });
  }
};

module.exports = {
  findAllUsers,
  detailUser,
  tambahUser,
  deleteUser,
  updateUser,
};