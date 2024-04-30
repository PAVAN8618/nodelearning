import express from "express";
import cors from "cors";
//import mongoose from "mongoose";
import booksRoute from "./routes/booksRoute";

const app = express();
const PORT = 3000;
//mtV8CjC2A4wFXSXH//pnttiwari99
app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("Welcome To MERN Stack Tutorial");
});
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});

app.use("/books", booksRoute);

// mongoose
//   .connect(mongoDBURL)
//   .then(() => {
//     console.log("App connected to database");
//     app.listen(PORT, () => {
//       console.log(`App is listening to port: ${PORT}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });
