import data from './constants.js';
import fs from "fs";
import express from 'express';
import { checkSchema, validationResult } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { resolveIndexByExamId, patchExamById,resolveByExamId, deleteExamById } from '../../utils/middlewares.js';
import Core from '../../core/Core.js';
import { Paths } from '../../core/Paths.js';

const examOnlineRouter = express.Router();
const paths = new Paths();
const path = paths.getPathExams("ExamOnline");
const constantType = "ExamOnline";
const exams = Core.readJson()
// main route traily: "/dashboard/exams/online"
// Wyświetlanie egzaminów
examOnlineRouter.get(`/${data.traily}/`, (req, res) => {
    res.status(200).json({ data: exams });
});

examOnlineRouter.get(`/${data.traily}/data/:type`, (req, res) => {
  const { type } = req.params;
  const file = Core.readJson(type);
  if (file) {
    return res.status(200).send(file)
  } else {
    return res.status(404).send({ status: "file was not found" })
  }
})

examOnlineRouter.post(`/${data.traily}/create/:type`, checkSchema(examSchema), async (req, res) => {
  const { body } = req;
  const { type } = req.params;
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).send(errors.array());
  try {
    let exams = Core.readJson(type);
    const newExam = { id: exams[exams.length - 1].id + 1, ...body };
    Core.readAndSaveJson(type, newExam);
    return res.status(200).send(newExam);
  } catch (err) {
    res.status(500).send({ status: "Error reading and saving JSON file" })
  }
});

// Wyświetlanie egzaminu po id
examOnlineRouter.get(`/${data.traily}/:id`, (req, res) => {
    const { id } = req.params;
    let exams = JSON.parse(fs.readFileSync(path));
    const foundExam = exams.find((e) => e.id === parseInt(id));
    if (!foundExam) res.status(404).json({ status: "Nie znaleziono egzaminu" });
    res.status(200).json({ data: foundExam });
});

// Wyświetlanie egzaminu po użytkowniku
examOnlineRouter.get(`/${data.traily}/user/:user`, (req, res) => {
    const { user } = req.params;
    let exams = JSON.parse(fs.readFileSync(path));
    const foundExam = exams.find((e) => e.user === user);
    if (!foundExam) res.status(404).json({ status: "Nie znaleziono egzaminu" });
    res.status(200).json({ status: `data of ${user}`, data: foundExam });
    fs.appendFileSync(path,exams);

});

// Tworzenie egzaminu
examOnlineRouter.post(`/${data.traily}/create`, checkSchema(examSchema), (req, res) => {
    const { body } = req;
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).send(errors.array());
    const newExam = { id: exams[exams.length - 1].id + 1, ...body };
    exams.push(newExam);
    res.status(200).send(newExam);
    fs.appendFileSync(path,exams);

});

// Patchowanie egzaminu
examOnlineRouter.patch(`/${data.traily}/update/:id`, patchExamById, (req, res) => {
    const { foundExamIndex, patchedExam } = req;
    const { id } = req.params;
    let exams = JSON.parse(fs.readFileSync(path));
    exams[foundExamIndex] = patchedExam;
    Core.readAndSaveJson(constantType, exams);
    return res.status(200).send(patchedExam);
});

// Usuwanie egzaminu
examOnlineRouter.delete(`/${data.traily}/delete/:id`, deleteExamById, (req, res) => {
  const { exams, foundExamIndex } = req;
  if (!exams) return res.status(400).send("Exams not found");
  exams.splice(foundExamIndex, 1);
  Core.saveJson(path, exams);
  res.status(200).send("Exam was successfully deleted");
});


export default examOnlineRouter;