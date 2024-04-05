// src/swaggerOptions.ts
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerDefinition from './swaggerDefinition';

const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'], // Path to the API routes directory
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
