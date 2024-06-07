import Core from '../core/Core.js';
import AppError from './ErrorHandler.js';
export const resolveByExamId = async (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }

    try {
        const exam = await Core.getExamWithTasksById(parsedId);
        if (!exam) {
            return next(new AppError("Exam not found", 404))
          
        }
        req.exam = exam;
        next();
    } catch (err) {
        next(new AppError("Failed to fetch exam", 500))
    }
};

export const patchExamByIdMiddle = async (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return next(new AppError("Invalid id",400))
    }

    try {
        const exam = await Core.getExamById(parsedId);
        if (!exam) {
            return res.status(404).send("Exam not found");
        }
        req.foundExamIndex = exam;
        req.patchedExam = { ...exam, ...req.body };
        next();
    } catch (err) {
        res.status(500).send("Failed to fetch exam");
    }
};

export const deleteExamByIdMiddle = async (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }

    try {
        const exam = await Core.getExamById(parsedId);
        if (!exam) {
            return next(new AppError("Exam not found",404));        
        }
        req.exam = exam;
        next();
    } catch (err) {
        res.status(500).send("Failed to fetch exam");
    }
};
