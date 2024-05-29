import path from "path";
import { ActionsTypes } from "./coreType.js";

const basePath = path.join(process.cwd(), 'data');
export class Paths{

    constructor() {
        this.basePath = basePath;
    }

    getPathExams(type){
        switch (type) {
            case ActionsTypes.ExamPaper:
                return path.join(this.basePath, 'examModelPaper.json');
            case ActionsTypes.ExamOnline:
                return path.join(this.basePath, 'examModelOnline.json');
            case ActionsTypes.User:
                return path.join(this.basePath, 'someUserPath.json');
            default:
                throw new Error("invalid type");
        }
    }
} 