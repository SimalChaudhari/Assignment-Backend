"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Task Management API',
        version: '1.0.0',
        description: 'API documentation for Task Management',
    },
    servers: [
        {
            url: 'http://localhost:3000', // Assuming your server runs on localhost:3000
            description: 'Development server',
        },
    ],
};
exports.default = swaggerDefinition;
