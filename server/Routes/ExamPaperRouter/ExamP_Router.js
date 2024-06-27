import { Router } from 'express';
const examPaperRouter = Router();
const traily = "traily/examsOnline";

examPaperRouter.get(`${traily}`, (req, res) => {

});

examPaperRouter.get(`${traily}/:id`, (req, res) => {
    
});

examPaperRouter.get(`${traily}/getExamByUser/:user`, (req, res) => {
    
});



export default examPaperRouter;