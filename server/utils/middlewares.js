import fs from 'fs'
let path = './data/examModelOnline.json';
let exams = JSON.parse(fs.readFileSync(path));

export const resolveIndexByExamId = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");
    const foundExamIndex = exams.findIndex((user) => user.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
    req.foundExamIndex = foundExamIndex;
    next();
};

export const patchExamById = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");
    const foundExamIndex = exams.findIndex((user) => user.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
    const patchedExam = Object.assign({id: exams[foundExamIndex].id}, req.body);
    exams[foundExamIndex] = patchedExam;
    res.status(200).send(patchedExam);
};
