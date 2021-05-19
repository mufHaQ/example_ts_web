"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const main_1 = require("./main");
const route = main_1.express.Router();
route.get('/', (req, res) => {
    res.json({
        msg: "Hello World"
    });
});
exports.default = route;
