"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
const typeorm_1 = require("typeorm");
exports.dbConfig = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "md4_express",
    entities: ["*/**/src/entity/*.js"],
    logging: false,
    synchronize: true,
});
