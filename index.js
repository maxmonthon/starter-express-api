import express from "express";
import supplierRoute from "./routes/supplierRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors";
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("test api");
});
app.use(cors());
app.use(express.json());
app.use("/suppliers", supplierRoute);
app.use("/products", productRoute);

// app.listen(PORT, () => {
//   console.log("Server running on port : " + PORT);
// });

app.listen((req, res) => {
  console.log("Run server!");
});

app.listen(process.env.PORT || 5000);
