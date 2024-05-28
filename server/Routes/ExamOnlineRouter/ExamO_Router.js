import data from './constants.js'
import fs from "fs";
import express from 'express'
import { checkSchema, validationResult } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { resolveIndexByExamId } from '../../utils/middlewares.js';
import { examsFile } from '../../data/examModel_Online.js';
let path = './data/examModelOnline.json';
let exams = JSON.parse(fs.readFileSync(path));
const examOnlineRouter = express.Router();

// main route traily: "/dashboard/exams/online"
// Wyświetlanie egzaminów
examOnlineRouter.get(`/${data.traily}`,(req, res)=>{
    res.status(200).json({
        data: exams,
      });
});

// Wyświetlanie egzaminu po id
examOnlineRouter.get(`/${data.traily}/:id`,(req, res)=>{
    const { id } = req.params;
 
    const foundExam = examsFile.find((e)=>e.id === parseInt(id));
    
    if(!foundExam) res.status(404).json({status:"Nie znaleziono egzmainu"})
    res.status(200).json({data: foundExam});

});
// Wyświetlanie egzaminu po użytkowniku
examOnlineRouter.get(`/${data.traily}/user/:user`,(req, res)=>{
    const { user } = req.params;

    const foundExam = examsFile.find((e) => e.user === user);

    if (!foundExam) res.status(404).json({status:"Nie znaleziono egzmainu"});
    res.status(200).json({ msg: `data of ${user}`, data: foundExam })
});
// Tworzenie egzaminu
examOnlineRouter.post(`/${data.traily}/create`, checkSchema(examSchema), (req, res) => {
  const { body } = req;
  const errors = validationResult(req);
  if (!errors) return res.status(400).send(errors.array());
  console.log(validationResult)
  const newExam = { id: examsFile[examsFile.length - 1].id + 1, ...body }
  examsFile.push(newExam);
  res.status(200).send(newExam);
});

// EXAM -> question1:hover question2:hover
// Patchowanie egzaminu
examOnlineRouter.patch(`/${data.traily}/update`, (req, res) => {

});

// Usuwanie egzaminu
examOnlineRouter.delete(`/${data.traily}/delete/:id`, resolveIndexByExamId, (req, res) => {
  const { foundExamIndex } = req;
  examsFile.splice(foundExamIndex, 1);
  res.status(200).send("Exam was successfully deleted")
});

export default examOnlineRouter;