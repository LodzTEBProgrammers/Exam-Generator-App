import express from 'express';
import cors from 'cors';
import examOnlineRouter from './Routes/ExamOnlineRouter/ExamO_Router.js';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import { securityService } from './security.js';
import userRouter from './Routes/UserRouter/User_Router.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(securityService.limiter);
app.use(cors());
app.use(express.json());
app.use(helmet())
app.use(bodyParser.json());
app.use(examOnlineRouter);
app.use(cookieParser());
app.use(userRouter)
app.use((err, req, res, next) => {
    err.status = err.status || "fail";
    err.statusCode = err.statusCode || 500;
  
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  });

export default app;