const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDB");
const path = require("path");
// Config dotenv file
dotenv.config();

// database call
connectDb();

// rest object
const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

// routes
// user Routes
app.use("/api/v1/users", require("./routes/userRoute"));

// transaction routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// Static files
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// port
const PORT = 8080 || process.env.PORT;

// Listen

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
