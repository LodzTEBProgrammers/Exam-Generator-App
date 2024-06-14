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
