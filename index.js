const express = require('express')
const app = express()
const port = 7777
const data_users = [
  { id: 1, name: "Bedul Arya", alamat: "Denki" },
  { id: 2, name: "Giya Saputri", alamat: "Dungsema" },
  { id: 3, name: "Stefany Stellar", alamat: "Wakanda" },
  { id: 4, name: "Iyan maulana", alamat: "Kembar" },
  { id: 5, name: "Faris Ahmad Suki", alamat: "Logam" },
];

app.get("/pengguna", (req, res) => {
  const data = data_users;
  let result = {
      status: 200,
      data: data,
  };

  res.json(result);
});


app.get("/pengguna/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let result;
  const user = data_users.find((user) => user.id === id);
  if (user) {
      result = {
      status: 200,
      data: user,
      };
  }
  res.json(result);
});


app.get("/pengguna/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let result;
  const user = data_users.find((user) => user.id === id);
  if (user) {
      result = {
      status: 200,
      data: user,
      };
  } else {
      res.status(404).json({ error: "User not found" });
  }
  res.json(result);
});
app.listen(port,() => console.log(`Server running on port ${port}`))
