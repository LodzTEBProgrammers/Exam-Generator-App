import data from './constants.js'
import fs from "fs";
import express from 'express'
let path = './data/examModelOnline.json'; 
let exams = JSON.parse(fs.readFileSync(path));
const examOnlineRouter = express.Router();

// Wyświetlanie egzaminów
examOnlineRouter.get(`/${data.traily}/exams`,(req, res)=>{
    res.status(200).json({
        data: exams,
      });
});

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
examOnlineRouter.get(`/${data.traily}/getExamByUser/:user`,(req, res)=>{
    
});
// Tworzenie egzaminu
examOnlineRouter.post(`/${data.traily}/create`, (req, res) => {

});

// EXAM -> question1:hover question2:hover
// Patchowanie egzaminu
examOnlineRouter.patch(`/${data.traily}/update`, (req, res) => {

});

// Usuwanie egzaminu
examOnlineRouter.delete(`/${data.traily}/delete`, (req, res) => {

});

export default examOnlineRouter;