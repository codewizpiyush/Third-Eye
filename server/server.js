const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const dbConfig = require("./config/dbConfig");

const usersRoute = require("./routes/usersRoute");
const examsRoute = require("./routes/examsRoute");
const reportsRoute = require("./routes/reportsRoute");
const quizRoute = require("./routes/quizRoute");


app.use("/api/users", usersRoute);
app.use("/api/exams", examsRoute);
app.use("/api/reports", reportsRoute);
app.use("/api", quizRoute);
const port = process.env.PORT || 5000;




app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
