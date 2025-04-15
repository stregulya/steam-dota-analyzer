import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import heroRoutes from "./routes/heroRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use("/api", heroRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
