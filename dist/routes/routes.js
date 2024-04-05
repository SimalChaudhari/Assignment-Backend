"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Hello_1 = __importDefault(require("../Controller/Hello")); // Corrected import path
const router = express_1.default.Router();
router.get('/data', Hello_1.default); // Corrected controller name
exports.default = router;
