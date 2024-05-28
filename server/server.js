import express from 'express';
import cors from 'cors';
import examOnlineRouter from './Routes/ExamOnlineRouter/ExamO_Router.js';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use(examOnlineRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port " + (process.env.PORT || 5000));
});
