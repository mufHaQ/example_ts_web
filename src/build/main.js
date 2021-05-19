"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.express = exports.app = void 0;
// Imports
const express_1 = __importDefault(require("express"));
exports.express = express_1.default;
const server_1 = __importDefault(require("./server"));
const route_1 = __importDefault(require("./route"));
const app = express_1.default();
exports.app = app;
new server_1.default(8001, "localhost", app);
app.use(route_1.default);
