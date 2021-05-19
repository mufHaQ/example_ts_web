"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = exports.app = void 0;
// Imports
// npm/yarn Package
const express_1 = __importDefault(require("express"));
exports.express = express_1.default;
const dotenv_1 = __importDefault(require("dotenv"));
// My Module
const server_1 = __importDefault(require("./server"));
const route_1 = __importDefault(require("./route"));
// dotenv
dotenv_1.default.config();
// Express
const app = express_1.default();
exports.app = app;
app.use(route_1.default);
// server.ts
new server_1.default(process.env.PORT, "localhost", app);
