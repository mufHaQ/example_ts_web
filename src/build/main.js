"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server"));
const app = express_1.default();
const server = new server_1.default(8001, "localhost", app);
server.run();
