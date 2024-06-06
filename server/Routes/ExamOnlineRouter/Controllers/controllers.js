import Core from "../../../core/Core.js";
import { Paths } from "../../../core/Paths.js";
import dataType from "../constants.js";
import { validationResult } from 'express-validator';
const paths = new Paths();
const getExams = (req, res) => {
    const examPath = paths.getPathExams(dataType.examOnline);
    const exams = Core.readJson(examPath);
    res.status(200).json({ data: exams });
}

const getExamsByType = (req, res) => {
    const { type } = req.params;
    const examPath = paths.getPathExams(type);
    const file = Core.readJson(examPath);
    
    if (file) {
        return res.status(200).send(file);
    } else {
        return res.status(404).send({ status: "file was not found" });
    } 
}

// const createExamByType = async (req, res) => {
//     const { body } = req;
//     const { type } = req.params;
//     const errors = validationResult(req);
    
//     if (!errors.isEmpty()) {
//         return res.status(400).send(errors.array());
//     }
    
//     try {
//         let exams = Core.readJson(type);
//         const newExam = { id: exams[exams.length - 1].id + 1, ...body };
//         Core.readAndSaveJson(type, newExam);
//         return res.status(200).send(newExam);
//     } catch (err) {
//         return res.status(500).send({ status: "Error reading and saving JSON file" });
//     }
// }


// wyciągniejcie z req.body wszystkie dane z jsona i poddajcie je walidacji np poprzez schemat, czy też stworzenie nowego middleware
const createExam = (req, res) => {
    const { body } = req;
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }
    
    const newExam = { id: exams[exams.length - 1].id + 1, ...body };
    exams.push(newExam);
    fs.appendFileSync(path, JSON.stringify(exams));
    return res.status(200).send(newExam);
}
const getExamById = (req, res) => {
    const { exam } = req;
    if (!exam) {
        return res.status(404).json({ status: "Nie znaleziono egzaminu" });
    }
    return res.status(200).json({ data: exam });
};

const getExamByUser = (req, res) => {
    const { user } = req.params;
    let exams = JSON.parse(fs.readFileSync(path));
    const foundExam = exams.find((e) => e.user === user);
    
    if (!foundExam) {
        return res.status(404).json({ status: "Nie znaleziono egzaminu" });
    }
    
    return res.status(200).json({ status: `data of ${user}`, data: foundExam });
};

//const

const patchExamById = (req, res) => {
    const { foundExamIndex, patchedExam } = req;
    const { id } = req.params;
    let exams = JSON.parse(fs.readFileSync(path));
    exams[foundExamIndex] = patchedExam;
    Core.readAndSaveJson(constantType, exams);
    return res.status(200).send(patchedExam);
};

const deleteExamById = (req, res) => {
    const { exams, foundExamIndex } = req;
    if (!exams) {
        return res.status(400).send("Exams not found");
    }
    exams.splice(foundExamIndex, 1);
    Core.saveJson(path, exams);
    return res.status(200).send("Exam was successfully deleted");
};

export const Controllers = {
    getExams, 
    getExamsByType,
    getExamById,
    getExamByUser,
    patchExamById,
    deleteExamById,
    createExam
}