import fs from 'fs'
let path = './data/examModelOnline.json';
let exams = JSON.parse(fs.readFileSync(path));
import Core from '../core/Core.js';

export const resolveIndexByExamId = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");
    const foundExamIndex = exams.findIndex((exam) => exam.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
    req.foundExamIndex = foundExamIndex;
    next();
};
export const resolveByExamId = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");
    const foundExamIndex = exams.findIndex((exam) => exam.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
    req.exams = exams[foundExamIndex]
    next();
};

export const patchExamById = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");

    let exams = Core.readJson("ExamsOnline");
    const foundExamIndex = exams.findIndex((exam) => exam.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
    req.foundExamIndex = foundExamIndex;
    // exams[foundExamIndex] = patchedExam;
    const patchedExam = Object.assign({id: exams[foundExamIndex].id}, req.body);
    res.status(200).send(patchedExam);
    next();
};

export const deleteExamById = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");
    const foundExamIndex = exams.findIndex((exam) => exam.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
}
