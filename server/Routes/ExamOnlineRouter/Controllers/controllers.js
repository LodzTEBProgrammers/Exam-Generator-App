import Core from "../../../core/Core.js";
import { validationResult } from 'express-validator';

const getExams = async (req, res) => {
    try {
        const service = Core.getService("ExamO_Service");
        const exams = await service.getAllExams();

        res.status(200).json({ data: exams });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch exams" });
    }
};

const getExamById = async (req, res) => {
    const { id } = req.params;

    try {
        const service = Core.getService("ExamO_Service");
        const exam = await service.getExamWithTasksById(id);

        if (!exam) {
            return res.status(404).json({ error: "Exam not found" });
        }
        res.status(200).json({ data: exam });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch exam" });
    }
};

const getExamByUser = async (req, res) => {
    const { user } = req.params;

    try {
        const service = Core.getService("ExamO_Service");
        const exams = await service.getExamsByUser(user);

        if (!exams.length) {
            return res.status(404).json({ error: "No exams found for the user" });
        }
        res.status(200).json({ data: exams });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch exams" });
    }
};

const createExam = async (req, res) => {
    const { body } = req;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }

    try {
        const service = Core.getService("ExamO_Service");
        const examId = await service.createExam(body);

        res.status(200).send({ id: examId, ...body });
    } catch (err) {
        res.status(500).send({ error: "Failed to create exam" });
    }
};

const patchExamById = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }

    try {
        const service = Core.getService("ExamO_Service");
        await service.updateExam(id, body);
        res.status(200).send(body);
    } catch (err) {
        res.status(500).send({ error: "Failed to update exam" });
    }
};

const deleteExamById = async (req, res) => {
    const { id } = req.params;
    try {
        const service = Core.getService("ExamO_Service");
        await service.deleteExam(id);
        res.status(200).send("Exam was successfully deleted");
    } catch (err) {
        res.status(500).send({ error: "Failed to delete exam" });
    }
};
const getAllTasks = async (req, res) => {
    try {
        const service = Core.getService("ExamO_Service");
        const tasks = await service.getAllTasks();
        console.log("Tasks fetched successfully:", tasks); // Add this line
        res.status(200).json({ data: tasks });
    } catch (err) {
        console.error("Error in getTasks controller:", err); // Modify this line
        res.status(500).send("Failed to find task");
    }
};

const getTask = async (req,res)=>{
    try{
        const {id} = req.params;
        const service = Core.getService("ExamO_Service");
        const task = await service.getTask(id);
        res.status(200).json({data:task});
    }catch(err){
        res.status(500).send("Failed to find task")
    }
}
const addTaskToExam = async (req, res) => {
    const { id } = req.params;
    const { taskId } = req.body;

    try {
        const service = Core.getService("ExamO_Service");
        await service.addTaskToExam(id, taskId);
        res.status(200).send({ message: "Task added to exam" });
    } catch (err) {
        res.status(500).send({ error: "Failed to add task to exam" });
    }
};

const updateExamStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const service = Core.getService("ExamO_Service");
        await service.updateExamStatus(id, status);
        res.status(200).send({ message: "Exam status updated" });
    } catch (err) {
        res.status(500).send({ error: "Failed to update exam status" });
    }
};

const getExamsByStatus = async (req, res) => {
    const { status } = req.params;

    try {
        const service = Core.getService("ExamO_Service");
        const exams = await service.getExamsByStatus(status);

        if (!exams.length) {
            return res.status(404).json({ error: "No exams found for the specified status" });
        }
        res.status(200).json({ data: exams });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch exams" });
    }
};

export const Controllers = {
    getExams,
    getExamById,
    getExamByUser,
    getTask,
    getAllTasks,
    patchExamById,
    deleteExamById,
    createExam,
    addTaskToExam,
    updateExamStatus,
    getExamsByStatus
};