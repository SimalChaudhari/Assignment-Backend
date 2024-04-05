"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Task_1 = require("../Controller/Task");
const router = express_1.default.Router();
/**
 * @swagger
 * /api-v1/tasks:
 *   get:
 *     summary: Get all tasks
 *     description: Retrieve a list of all tasks.
 *     responses:
 *       '200':
 *         description: A list of tasks.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 */
router.get('/tasks', Task_1.getAllTask);
/**
 * @swagger
 * /api-v1/task/{id}:
 *   get:
 *     summary: Get a task by ID
 *     description: Retrieve a single task by its ID.
 *     parameters:
 *       - in: path
 *         name: Please Enter Valid ID
 *         description: ID of the task to retrieve
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       '404':
 *         description: Task not found.
 *       '500':
 *         description: Internal server error.
 */
router.get('/task/:id', Task_1.getTask);
/**
 * @swagger
 * /api-v1/task:
 *   post:
 *     summary: Create a new task
 *     description: Create a new task with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/NewTask'
 *     responses:
 *       '200':
 *         description: The created task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       '500':
 *         description: Internal server error.
 * components:
 *   schemas:
 *     NewTask:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         dueDate:
 *           type: string
 *           format: date
 *         assignedTo:
 *           type: string
 *         category:
 *           type: string
 *         status:
 *           type: string
 *           enum: [Pending, Completed]
 */
router.post('/task', Task_1.createTask);
/**
 * @swagger
 * /api-v1/task/{id}:
 *   put:
 *     summary: Update a task by ID
 *     description: Update an existing task with the provided details.
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the task to update
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UpdateTask'
 *     responses:
 *       '200':
 *         description: The updated task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       '404':
 *         description: Task not found.
 *       '500':
 *         description: Internal server error.
 * components:
 *   schemas:
 *     UpdateTask:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         dueDate:
 *           type: string
 *           format: date
 *         assignedTo:
 *           type: string
 *         category:
 *           type: string
 *         status:
 *           type: string
 *           enum: [Pending, Completed]
 */
router.put('/task/:id', Task_1.updateTask);
/**
 * @swagger
 * /api-v1/assign/tasks:
 *   get:
 *     summary: Get tasks assigned to a user
 *     description: Retrieve tasks assigned to a user based on the provided `assignedTo` query parameter.
 *     parameters:
 *       - in: query
 *         name: assignedTo
 *         description: Username of the user to whom tasks are assigned.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of tasks assigned to the user.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       '400':
 *         description: Missing required parameter or invalid value provided.
 *       '404':
 *         description: No tasks found for the provided user or user does not exist.
 *       '500':
 *         description: Internal server error.
 */
router.get('/assign/tasks', Task_1.getAssignTask);
/**
 * @swagger
 * /api-v1/category/tasks:
 *   get:
 *     summary: Get tasks by category
 *     description: Retrieve tasks based on the provided `category` query parameter.
 *     parameters:
 *       - in: query
 *         name: category
 *         description: Category of the tasks to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A list of tasks in the specified category.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Task'
 *       '400':
 *         description: Missing required parameter or invalid value provided.
 *       '404':
 *         description: No tasks found for the provided category.
 *       '500':
 *         description: Internal server error.
 */
router.get('/category/tasks', Task_1.categoryWiseTask);
exports.default = router;
