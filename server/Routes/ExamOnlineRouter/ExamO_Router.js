import express from 'express';
import { checkSchema } from 'express-validator';
import { examSchema } from '../../schemas/checkExamQuery.js';
import { patchExamByIdMiddle, resolveByExamId, deleteExamByIdMiddle, Verify } from '../../utils/middlewares.js';
import { Controllers } from './Controllers/controllers.js';
import data from '../constants.js';

const { getExams, getExamById, getExamByUser, patchExamById, deleteExamById, createExam, addTaskToExam, updateExamStatus, getExamsByStatus,getTask,getAllTasks } = Controllers;
const examOnlineRouter = express.Router();

examOnlineRouter.get(`/${data.traily}`, Verify, getExams);
examOnlineRouter.get(`/${data.traily}/:id`, Verify, resolveByExamId, getExamById);
examOnlineRouter.get(`/${data.traily}/user/:user`, Verify, getExamByUser);
examOnlineRouter.post(`/${data.traily}/create`, Verify, checkSchema(examSchema), createExam);
examOnlineRouter.patch(`/${data.traily}/update/:id`, Verify, patchExamByIdMiddle, patchExamById);
examOnlineRouter.delete(`/${data.traily}/delete/:id`, Verify, deleteExamByIdMiddle, deleteExamById);
examOnlineRouter.post(`/${data.traily}/tasks/:id`, Verify, addTaskToExam);
examOnlineRouter.patch(`/${data.traily}/:id/status`, Verify,updateExamStatus);
examOnlineRouter.get(`/${data.traily}/status/:status`, Verify, getExamsByStatus);
examOnlineRouter.get(`/${data.traily}/tasks/:id`,Verify,getTask)
examOnlineRouter.get(`/${data.traily}/tasks`, getAllTasks); // Temporarily remove Verify
export default examOnlineRouter;
