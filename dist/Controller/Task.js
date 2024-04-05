"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryWiseTask = exports.getAssignTask = exports.getAllTask = exports.updateTask = exports.getTask = exports.createTask = void 0;
const task_1 = __importDefault(require("../models/task"));
//create task
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.create(req.body);
        res.json(task);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
exports.createTask = createTask;
//get by id task 
const getTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = yield task_1.default.findById(req.params.id);
        if (!task)
            return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
exports.getTask = getTask;
//update task
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedTask = yield task_1.default.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask)
            return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
exports.updateTask = updateTask;
//getAll Task
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const page = parseInt(req.query.page as string) || 1; // Get page number from query parameters or default to 1
        // const limit = 2; // Number of records per page
        // const skip = (page - 1) * limit; // Calculate number of records to skip based on page number
        // const tasks: ITask[] = await TaskModel.find().skip(skip).limit(limit); // Query tasks with pagination
        // res.json(tasks);
        const tasks = yield task_1.default.find();
        res.json(tasks);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
exports.getAllTask = getAllTask;
//pagination
//assign user
const getAssignTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const assignedTo = req.query.assignedTo;
        if (!assignedTo) {
            return res.status(400).json({ message: 'Missing required parameter: assignedTo' });
        }
        // Use a case-insensitive regex to find partial matches of the assignedTo field
        const regex = new RegExp(assignedTo, 'i');
        // Find tasks where assignedTo field matches partially with the provided value
        const tasks = yield task_1.default.find({ assignedTo: { $regex: regex } });
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for the provided user or user are not exist' });
        }
        res.json(tasks);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
exports.getAssignTask = getAssignTask;
//category wise data
const categoryWiseTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.query.category;
        if (!category) {
            return res.status(400).json({ message: 'Missing required parameter: category' });
        }
        // Check if the provided username exists in the database
        const userExists = yield task_1.default.exists({ category });
        if (!userExists) {
            return res.status(404).json({ message: 'category not found' });
        }
        // If the user exists, fetch tasks assigned to that user
        const tasks = yield task_1.default.find({ category });
        res.json(tasks);
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});
exports.categoryWiseTask = categoryWiseTask;
