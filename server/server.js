import express from 'express';
import cors from 'cors';
import examOnlineRouter from './Routes/ExamOnlineRouter/ExamO_Router.js';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { securityService } from './security.js';
const app = express();
app.use(securityService.limiter);
app.use(cors());
app.use(express.json());
app.use(helmet())
app.use(bodyParser.json());

app.use(examOnlineRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running on port " + (process.env.PORT || 5000));
});
