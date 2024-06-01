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
    
    static readJson = function readJson(type) {
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

    static readAndSaveJson = function readAndSaveJson(type, newExam) {
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
}