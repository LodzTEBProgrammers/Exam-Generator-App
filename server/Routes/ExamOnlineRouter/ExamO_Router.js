import express from 'express';
import fs from 'fs';
import { checkSchema, validationResult } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { patchExamByIdMiddle, resolveByExamId, deleteExamByIdMiddle } from '../../utils/middlewares.js';
import Core from '../../core/Core.js';
import { Paths } from '../../core/Paths.js';
import data from './constants.js'; 
import { Controllers } from './Controllers/controllers.js';
const { getExams, getExamById, getExamByUser, patchExamById, deleteExamById, createExam } = Controllers;

const examOnlineRouter = express.Router();

// Main route traily: "/dashboard/exams/online"
// Wyświetlanie egzaminów
examOnlineRouter.get(`/${data.traily}`, getExams);

//examOnlineRouter.get(`/${data.traily}/data/:type`,getExamsByType);

//examOnlineRouter.post(`/${data.traily}/create/:type`, checkSchema(examSchema), createExamByType); do usuniecia

// Wyświetlanie egzaminu po id
examOnlineRouter.get(`/${data.traily}/:id`,resolveByExamId, getExamById);

// Wyświetlanie egzaminu po użytkowniku
examOnlineRouter.get(`/${data.traily}/user/:user`, getExamByUser);

// Tworzenie egzaminu
examOnlineRouter.post(`/${data.traily}/create`, checkSchema(examSchema), createExam);

// Patchowanie egzaminu
examOnlineRouter.patch(`/${data.traily}/update/:id`, patchExamByIdMiddle, patchExamById);

// Usuwanie egzaminu
examOnlineRouter.delete(`/${data.traily}/delete/:id`, deleteExamByIdMiddle, deleteExamById);

export default examOnlineRouter;