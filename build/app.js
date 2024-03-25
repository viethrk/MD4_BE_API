"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express = require("express");
const db_config_1 = require("./src/config/db.config");
const cors = require("cors");
const user_route_1 = require("./src/route/user.route");
const auth_route_1 = require("./src/route/auth.route");
const port = process.env.PORT || 3000;
// establish database connection
db_config_1.dbConfig
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
app.use("/api/v1/users", user_route_1.default);
app.use("/api/v1/auth", auth_route_1.default);
app.listen(port, () => {
    console.log(`Server running ${port}`);
});
