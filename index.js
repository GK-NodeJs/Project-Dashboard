require("dotenv").config(); // load .env variables

// import files
const projectRoutes = require("./routes/project");
const imageKitRoutes = require("./routes/imageKit");
const portfolioRoutes = require("./routes/portfolio");
const taskRoutes = require("./routes/task");
// import modules
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");

const app = express(); // create express app

// cors setup
const corsOptions = {
  origin: process.env.LOCAL_ORIGIN,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// basic middleware
app.use((req, res, next) => {
  next();
});

// dashboard routes
app.use("/api/dashboard", projectRoutes);
// common routes
app.use("/api/imageKit", imageKitRoutes);
// portfolio routes
app.use("/api/portfolio", portfolioRoutes);
// task routes
app.use("/api/task", taskRoutes);

// connect to mongodb
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`backend running on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("connection error", err);
  });
