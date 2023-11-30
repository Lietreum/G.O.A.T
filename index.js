const express = require("express");

const app = express();
const port = 3333;
const cors = require("cors"); // Import CORS module
app.use(cors());
app.use(express.json());

const router = require("./routes/index");
app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}`));