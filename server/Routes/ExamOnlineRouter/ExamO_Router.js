import express from 'express';
import { checkSchema } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { patchExamByIdMiddle, resolveByExamId, deleteExamByIdMiddle } from '../../utils/middlewares.js';
import { Controllers } from './Controllers/controllers.js';
import data from '../constants.js'
const { getExams, getExamById, getExamByUser, patchExamById, deleteExamById, createExam } = Controllers;
const examOnlineRouter = express.Router();

// Main route traily: "/dashboard/exams/online"
examOnlineRouter.get(`/${data.traily}`, getExams);
examOnlineRouter.get(`/${data.traily}/:id`, resolveByExamId, getExamById);
examOnlineRouter.get(`/${data.traily}/user/:user`, getExamByUser);
examOnlineRouter.post(`/${data.traily}/create`, checkSchema(examSchema), createExam);
examOnlineRouter.patch(`/${data.traily}/update/:id`, patchExamByIdMiddle, patchExamById);
examOnlineRouter.delete(`/${data.traily}/delete/:id`, deleteExamByIdMiddle, deleteExamById);

export default examOnlineRouter;
