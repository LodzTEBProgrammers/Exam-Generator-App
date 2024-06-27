import routes from '../constants/http-routes'
import axios from 'axios';
// do napisania serwis z akcjami API na egzaminach


// Jeżeli bedziemy chcieć użyjemy redux tooklita do napisania serwisów

const getExams = async (type) => {

    const res = await axios.get(routes.server + routes.routes.examsOnline.getExams.get + type)  
    return res;
}



export const examService ={
    getExams
}