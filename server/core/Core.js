import { Paths } from "./Paths";
import fs, { readFile } from "fs";
import { ActionsTypes } from "./coreType";



/*
Co ma znajdować się w Core aplikacji:
- ma to być dynamiczne
- Stworzyć metode odczytującą dane z jsona i przypisującą do zmiennej
- Stworzyć metode zapisującą dane do jsona, gdzie typ byłby automatycznie wykrywany
*/

const paths = new Paths();
export default class Core extends Paths {
    action = function action(type) {
        let path = '';
        switch (type) {
            case ActionsTypes.ExamPaper:
                path = '../data/examModel_Paper.json';
                break;
            case ActionsTypes.ExamOnline:
                path = '../data/examModel_Online.json';
                break;
            case ActionsTypes.User:
                path = '../data/someUserPath.json';
                break;
            default:
                throw new Error("invalid type");
        }
        return path;
    }

    readJson = function readJson(type) {
        try {
            const path = action(type);
            const file = fs.readFileSync(path, 'utf-8');
            return JSON.parse(file); // returns parsed file
        } catch(err) {
            console.log(err);
            return null;
        }
    }

    readAndSaveJson = function readAndSaveJson(type) {
        const path = action(type);
        const file = readFile(type);
        if (file) {
            return fs.appendFileSync(path, file);
        } else {
            console.log("File does not exist")
            return null;
        }
    }
}
