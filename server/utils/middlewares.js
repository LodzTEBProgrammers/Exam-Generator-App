import fs from 'fs';
import Core from '../core/Core.js';

let path = './data/examModelOnline.json';
let exams = JSON.parse(fs.readFileSync(path));

export const resolveByExamId = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    
    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }
    
    const foundExamIndex = exams.findIndex((exam) => exam.id === parsedId);
    
 
    const foundexam = exams[foundExamIndex];
    if (!foundExamIndex) {
        return next(new AppError("Exam doesn't exists yet", 404));
    }
    req.exam = foundexam;
    next();
};

 // This typically happens when your route handler tries to send multiple responses for a single request, which is not allowed.
export const patchExamByIdMiddle = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    
    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }

    let exams = Core.readJson("ExamsOnline");
    const foundExamIndex = exams.findIndex((exam) => exam.id === parsedId);
    
    if (foundExamIndex === -1) {
        return res.status(404).send("Exam index was not found");
    }
    
    req.foundExamIndex = foundExamIndex;
    const patchedExam = Object.assign({id: exams[foundExamIndex].id}, req.body);
    req.patchedExam = patchedExam;
    next();
};

export const deleteExamByIdMiddle = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    
    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }
    
    const foundExamIndex = exams.findIndex((exam) => exam.id === parsedId);
    
    if (foundExamIndex === -1) {
        return res.status(404).send("Exam index was not found");
    }
    
    req.exams = exams;
    req.foundExamIndex = foundExamIndex;
    next();
};