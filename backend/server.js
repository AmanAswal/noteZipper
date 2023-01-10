const express = require("express");
const notes = require("./data/notes")
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const {notFound, errorHandler} = require('../backend/middlewares/errorMiddleware'); 

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const { application } = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

// connect to DB
connectDB();
app.use(express.json());


// creating routes for crud operations
app.use('/api/users', userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
    res.send("api is running");
})

app.use(notFound);
app.use(errorHandler);


app.listen(PORT, console.log("Server started on port", PORT));
