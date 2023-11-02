const express = require('express');

const app = express();
const port = 7777;
app.use(express.json());

const router = require("./routes/index");
app.use(router);

app.listen(port,() => console.log(`Server running on port ${port}`));
