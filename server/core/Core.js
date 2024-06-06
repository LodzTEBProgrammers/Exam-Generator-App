import { Paths } from "./Paths.js";
import fs, { readFile } from "fs";
import { ActionsTypes } from "./coreType.js";
import path, { parse } from "path";


/*
Co ma znajdować się w Core aplikacji:
- ma to być dynamiczne
- Stworzyć metode odczytującą dane z jsona i przypisującą do zmiennej
- Stworzyć metode zapisującą dane do jsona, gdzie typ byłby automatycznie wykrywany
*/
const paths = new Paths();
export default class Core extends Paths {
    constructor() {
        super();
    }
    static saveJson(path,exams){
        try{
            if (path !== null && exams !== null) {
                fs.writeFileSync(path.trim(),JSON.stringify(exams));
            } else {
                throw new Error("Error in given parameters")
            }
        } catch(er){
            console.log("Error reading JSON:", er);
            
        }
    }
    static readJson = (type) =>{
        try {
            const filePath = paths.getPathExams(type);
            const file = fs.readFileSync(filePath, 'utf-8'); // Dodaj kodowanie 'utf-8'
            console.log("File before parse: " + file)
            const parsedFile = JSON.parse(file);
            console.log("File parsed:", parsedFile); // Debugowanie zawartości pliku
            return JSON.parse(file); // Zwraca sparsowany plik
        } catch(err) {
            console.log("Error reading JSON:", err);
            return null;
        }
    }

    static readAndSaveJson = (type, newExam) =>{
        try {
            const file = Core.readJson(type);
            if (file === null) {
                throw new Error("Failed to read JSON file");
            }
            file.push(newExam);
            const filePath = paths.getPathExams(type);
            fs.writeFileSync(filePath, JSON.stringify(file, null, 2));
            return file;
        } catch (err) {
            console.log("Error saving data to JSON: " + err);
        }
    }

    static removeTaskById = (type, id) =>{
        try {
            const filePath = paths.getPathExams(type);
            const file = fs.readFileSync(filePath, 'utf-8');
            if (file === null) throw new Error("Failed to read JSON file");
            
        } catch (err) {
            
        }
    }
}