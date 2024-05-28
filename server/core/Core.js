import fs from 'fs';
export class Core{
    constructor() {
        this.PathEams = ""; 
        this.exams;
    }
    get getPaths(){
       return this.PathEams ='./data/examModelOnline.json'; 
    }
    get getExams(){
        const exams = JSON.parse(fs.readFileSync(this.PathEams));
    }
}