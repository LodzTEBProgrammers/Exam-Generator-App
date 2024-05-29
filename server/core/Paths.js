export class Paths{
    
    constructor() {
        this.PathExamsO = path.join(process.cwd(), 'data', 'examModelOnline.json');
    }
    get PathExamsO(){
        return this.PathExamsO;
    }
} 