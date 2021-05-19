"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import
// From main.ts
const main_1 = require("./main");
// Express
const route = main_1.express.Router();
route.get('/', (req, res) => {
    res.json({
        msg: "Hello World"
    });
});
route.get('/about', (req, res) => {
    res.send("About Page");
});
// Export
exports.default = route;
