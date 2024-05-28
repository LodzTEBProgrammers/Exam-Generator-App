import data from './constants.js';
import fs from "fs";
import express from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { resolveIndexByExamId } from '../../utils/middlewares.js';

const examOnlineRouter = express.Router();
let path = './data/examModelOnline.json';
let exams = JSON.parse(fs.readFileSync(path));

// main route traily: "/dashboard/exams/online"
// Wyświetlanie egzaminów
examOnlineRouter.get(`/${data.traily}`, (req, res) => {
    res.status(200).json({ data: exams });
});

// Wyświetlanie egzaminu po id
examOnlineRouter.get(`/${data.traily}/:id`, (req, res) => {
    const { id } = req.params;
    const foundExam = exams.find((e) => e.id === parseInt(id));
    if (!foundExam) res.status(404).json({ status: "Nie znaleziono egzaminu" });
    res.status(200).json({ data: foundExam });
});

// Wyświetlanie egzaminu po użytkowniku
examOnlineRouter.get(`/${data.traily}/user/:user`, (req, res) => {
    const { user } = req.params;
    const foundExam = exams.find((e) => e.user === user);
    if (!foundExam) res.status(404).json({ status: "Nie znaleziono egzaminu" });
    res.status(200).json({ status: `data of ${user}`, data: foundExam });
});

// Tworzenie egzaminu
examOnlineRouter.post(`/${data.traily}/create`, checkSchema(examSchema), (req, res) => {
    const { body } = req;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors.array());
    const newExam = { id: exams[exams.length - 1].id + 1, ...body };
    exams.push(newExam);
    res.status(200).send(newExam);
});

// Patchowanie egzaminu
examOnlineRouter.patch(`/${data.traily}/update/:id`, resolveIndexByExamId, (req, res) => {
    const { foundExamIndex } = req;
    const { name, date } = req.body;
    const patchedExam = Object.assign({ id: exams[foundExamIndex].id }, req.body);
    exams[foundExamIndex] = patchedExam;
    res.status(200).send(patchedExam);
});

// Usuwanie egzaminu
examOnlineRouter.delete(`/${data.traily}/delete/:id`, resolveIndexByExamId, (req, res) => {
    const { foundExamIndex } = req;
    exams.splice(foundExamIndex, 1);
    res.status(200).send("Exam was successfully deleted");
});

export default examOnlineRouter;
