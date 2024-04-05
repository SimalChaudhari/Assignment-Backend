"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server.ts
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./../routes/index"));
const app = (0, express_1.default)();
const port = 3000;
app.use('/task', index_1.default); // Removed extra space after 'task'
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
