import express from 'express';
import { checkSchema } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { patchExamByIdMiddle, resolveByExamId, deleteExamByIdMiddle, Verify } from '../../utils/middlewares.js';
import { Controllers } from './Controllers/controllers.js';
import data from '../constants.js'
const { getExams, getExamById, getExamByUser, patchExamById, deleteExamById, createExam } = Controllers;
const examOnlineRouter = express.Router();

// Main route traily: "/dashboard/exams/online"
examOnlineRouter.get(`/${data.traily}`,Verify ,getExams);
examOnlineRouter.get(`/${data.traily}/:id`, Verify,resolveByExamId, getExamById);
examOnlineRouter.get(`/${data.traily}/user/:user`, Verify,getExamByUser);
examOnlineRouter.post(`/${data.traily}/create`, Verify,checkSchema(examSchema), createExam);
examOnlineRouter.patch(`/${data.traily}/update/:id`, Verify,patchExamByIdMiddle, patchExamById);
examOnlineRouter.delete(`/${data.traily}/delete/:id`, Verify,deleteExamByIdMiddle, deleteExamById);

export default examOnlineRouter;

// Wyświetlanie egzaminu po id
examOnlineRouter.get(`/${data.traily}/exam/:id`,(req, res)=>{
    const {id} = req.params;
 
    const foundExam = exams.find(e=>e.id === parseInt(id));
    
    if(!foundExam){
      res.status(404).json({status:"Nie znaleziono egzmainu"})
    }
    res.status(200).json({data: foundExam});

});
// Wyświetlanie egzaminu po użytkowniku
examOnlineRouter.get(`/${data.traily}/getExamByUser`,(req, res)=>{
    const {user} = req.body;
    const foundExam = exams.find(e=>e.user === user);

    if(!foundExam){
      res.status(404).json({status:"Nie znaleziono egzmainu"})
    }
    res.status(200).json({data: foundExam});

});
// Tworzenie egzaminu
examOnlineRouter.post(`/${data.traily}/create`, (req, res) => {
const id = exams.length + 1;
let newExam = Object.assign(id,req.body);
exams.push(newExam);
});

// EXAM -> question1:hover question2:hover
// Patchowanie egzaminu
examOnlineRouter.patch(`/${data.traily}/update`, (req, res) => {

});

// Usuwanie egzaminu
examOnlineRouter.delete(`/${data.traily}/delete`, (req, res) => {

});

export default examOnlineRouter;