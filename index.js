const express = require('express')
const app = express()
const port = 7777

app.get('/kol',(req,res) =>{
  res.json({
    message: "Ini kol",
});
});
app.post('/kol',(req,res) =>{
  res.json({
    message: "Ini kol segar",
});
});
app.put('/kol',(req,res) =>{
  res.json({
    message: "Kol baru berstok",
});
});
app.delete('/kol',(req,res) =>{
  res.json({
    message: "Kol habis",
});
});
app.listen(port,() => console.log(`Server running on port ${port}`))
