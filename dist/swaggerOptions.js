"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/swaggerOptions.ts
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition_1 = __importDefault(require("./swaggerDefinition"));
const options = {
    swaggerDefinition: swaggerDefinition_1.default,
    apis: ['./src/routes/*.ts'], // Path to the API routes directory
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
