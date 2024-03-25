import "dotenv/config";
import * as express from "express";
import { dbConfig } from "./src/config/db.config";
import * as cors from "cors";
import userRoute from "./src/route/user.route";
import authRoute from "./src/route/auth.route";
import { User } from "./src/entity/user.entity";

const port = process.env.PORT || 3000;

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

// establish database connection
dbConfig
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);

app.listen(port, () => {
  console.log(`Server running ${port}`);
});
