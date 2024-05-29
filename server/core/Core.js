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
            const path = paths.getPathExams(type);
            const file = fs.readFileSync(path, 'utf-8');
            return JSON.parse(file); // returns parsed file
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    static readAndSaveJson = async function readAndSaveJson(type) {
        try {
            const path = paths.getPathExams(type);
            const content = await fs.promises.readFile(path, 'utf-8')
            const parsedFile = JSON.parse(content);
            // await fs.promises.writeFile(filePath, JSON.stringify(parsedFile, null, 2), 'utf-8');
            // return parsedFile;
            return fs.appendFileSync(path, parsedFile);
        } catch (err) {
            console.log(err);
        }
    }
}