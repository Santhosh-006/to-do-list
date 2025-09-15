import express from "express";
import router from "./routes/toDo.route.js";
import connectDB from "./lib/db.js";
import cors from "cors";

const app = express();

// connect to mongoDB

app.use(
  cors({
    origin: "https://sandys-to-do-list.vercel.app",
  })
);
// Data understanding in express

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

app.use("/", router);

const startServer = async () => {
  try {
    await connectDB();
    app.listen(6969, () => {
      console.log(`Server is running on port http://localhost:6969`);
    });
  } catch (error) {
    console.log("Failed to connect to the database.");
  }
};

startServer();
