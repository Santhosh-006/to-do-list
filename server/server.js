import express from "express";
import router from "./routes/toDo.route.js";
import connectDB from "./lib/db.js";

const app = express();

// connect to mongoDB
connectDB();
// Data understanding in express

app.use(express.json());
app.use(express.urlencoded({ extended: "true" }));

app.use("/", router);

app.listen(6969, () => {
  console.log("Server running at port 6969");
});
