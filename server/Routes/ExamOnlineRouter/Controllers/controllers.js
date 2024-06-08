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
}

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
}

const createExam = async (req, res) => {
    const { body } = req;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }

    try {
        const examId = await service.createExam(body);
        res.status(200).send({ id: examId, ...body });
    } catch (err) {
        res.status(500).send({ error: "Failed to create exam" });
    }
}

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
}

const deleteExamById = async (req, res) => {
    const { id } = req.params;
    try {

        const service = Core.getService("ExamO_Service");

        await service.deleteExam(id);
        res.status(200).send("Exam was successfully deleted");
    } catch (err) {
        res.status(500).send({ error: "Failed to delete exam" });
    }
}

export const Controllers = {
    getExams,
    getExamById,
    getExamByUser,
    patchExamById,
    deleteExamById,
    createExam
}
