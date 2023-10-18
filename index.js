const express = require('express')
const app = express()
const port = 7777

app.get('/kol',(req,res) =>{
  res.send("Kol tersedia")
})
app.post('/kol',(req,res) =>{
  res.send("Kol yang besar")
})
app.put('/kol',(req,res) =>{
  res.send("Kol baru berstok")
})
app.delete('/kol',(req,res) =>{
  res.send("Kol nya susah habis")
})
app.listen(port,() => console.log(`Server running on port ${port}`))
