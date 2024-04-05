import { Request, Response } from 'express';
import TaskModel, { ITask } from '../models/task';

//create task
export const createTask = async (req: Request, res: Response) => {
    try {
        const task: ITask = await TaskModel.create(req.body);
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

//get by id task 
export const getTask = async (req: Request, res: Response) => {
    try {
        const task: ITask | null = await TaskModel.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.json(task);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

//update task
export const updateTask = async (req: Request, res: Response) => {
    try {
        const updatedTask: ITask | null = await TaskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });
        res.json(updatedTask);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

//getAll Task
export const getAllTask = async (req: Request, res: Response) => {
    try {
        // const page = parseInt(req.query.page as string) || 1; // Get page number from query parameters or default to 1
        // const limit = 2; // Number of records per page
        // const skip = (page - 1) * limit; // Calculate number of records to skip based on page number

        // const tasks: ITask[] = await TaskModel.find().skip(skip).limit(limit); // Query tasks with pagination

        // res.json(tasks);

        const tasks: ITask[] = await TaskModel.find();
        res.json(tasks);

    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

//pagination



//assign user
export const getAssignTask = async (req: Request, res: Response) => {
    try {
        const assignedTo = req.query.assignedTo as string;
        if (!assignedTo) {
            return res.status(400).json({ message: 'Missing required parameter: assignedTo' });
        }
        // Use a case-insensitive regex to find partial matches of the assignedTo field
        const regex = new RegExp(assignedTo, 'i');
        // Find tasks where assignedTo field matches partially with the provided value
        const tasks: ITask[] = await TaskModel.find({ assignedTo: { $regex: regex } });
        if (tasks.length === 0) {
            return res.status(404).json({ message: 'No tasks found for the provided user or user are not exist' });
        }
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

//category wise data
export const categoryWiseTask = async (req: Request, res: Response) => {
    try {
        const category = req.query.category as string;
        if (!category) {
            return res.status(400).json({ message: 'Missing required parameter: category' });
        }
        // Check if the provided username exists in the database
        const userExists = await TaskModel.exists({ category });
        if (!userExists) {
            return res.status(404).json({ message: 'category not found' });
        }
        // If the user exists, fetch tasks assigned to that user
        const tasks: ITask[] = await TaskModel.find({ category });
        res.json(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
}

