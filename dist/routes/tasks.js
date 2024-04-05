"use strict";
// // src/routes/__tests__/tasks.test.ts
// import request from 'supertest';
// // import app from '../server'; // Assuming your Express app is exported from server.ts
// import express from 'express';
// const app = express();
// describe('Tasks API', () => {
//     it('GET /api-v1/tasks should return status 200 and an array of tasks', async () => {
//         const response = await request(app).get('/api/tasks');
//         expect(response.status).toBe(200);
//         expect(Array.isArray(response.body)).toBe(true);
//     });
//     it('POST /api-v1/tasks should create a new task', async () => {
//         const newTask = {
//             title: 'Test Task',
//             description: 'This is a test task.',
//             dueDate: new Date(),
//             assignedTo: 'John Doe',
//             category: 'Test',
//             status: 'Pending',
//         };
//         const response = await request(app)
//             .post('/api-v1/tasks')
//             .send(newTask);
//         expect(response.status).toBe(200);
//         expect(response.body).toMatchObject(newTask);
//     });
// });
