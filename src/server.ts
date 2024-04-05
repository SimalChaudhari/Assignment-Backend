// src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import router from './routes/index';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swaggerOptions';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000
app.use(express.json());

app.use('/api-v1', router);

// Serve Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// @ts-ignore
mongoose.connect("mongodb://localhost:27017/task_management_db", { useNewUrlParser: true, useUnifiedTopology: true, family: 4 })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('MongoDB connection error:', err));

