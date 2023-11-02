const { Book }= require("../models/");
const book = require("../models/book");
const findAllBooks = async(req, res) =>{
  //ambil data 
  const data = await Book.findAll();

  res.json({
    message: "ini dari router",
    data: data,
  })
};
const detailBook = async(req, res) =>{  
  let id = parseInt(req.body.id);
  //ambil data 
  
  const data = await Book.findByPk(id);

  res.json({
    message: "ini dari router",
    data: data,
  });
};

  const tambahBuku = async(req,res ) => { 
    try {
      const data = req.body;

      const result = await Book.create(data);
      res.json({
        result: result,
    });

  } catch (error) {
    res.json({
      massage: "Error : " + error,
    });  
  };
};

const hapusbuku = async(req, res) =>{
 try {  
  const id = req.body.id;
  const result = await Book.destroy({
    where: {
      id: id,
    },
  });
  res.json({
    message: "Buku berhasil di hapus",
  });
 } catch (error) {  
  res.json({
    message: "Error" + error,
  })};
};

const memperbaruibuku = async(req, res) => {
  try {
    const data1 = req.body.id;
    const newData = req.body;

    const result = await Book.update( newData, {
      where: {
        id: data1,
      }
    });
    res.json({
      message: "Berhasil memperbarui"
    })

  } catch (error) {
    res.json({
      message: "error" + error,
    })
  }
};



  
module.exports = { findAllBooks, detailBook, tambahBuku, hapusbuku, memperbaruibuku };