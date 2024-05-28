import { examsFile } from "../data/examModel_Online";

export const resolveIndexByExamId = (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) return res.status(400).send("Invalid id");
    const foundExamIndex = examsFile.findIndex((user) => user.id === id);
    if (foundExamIndex === -1) return res.status(404).send("Exam index was not found");
    req.foundExamIndex = foundExamIndex;
    next();
}