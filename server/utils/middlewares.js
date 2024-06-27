import Core from '../core/Core.js';
import AppError from './ErrorHandler.js';
import { validationResult } from "express-validator";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv';
dotenv.config();

export const resolveByExamId = async (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }

    try {
        const service = Core.getService("ExamO_Service");

        const exam = await service.getExamWithTasksById(parsedId);
        if (!exam) {
            return next(new AppError("Exam not found", 404))
          
        }
        req.exam = exam;
        next();
    } catch (err) {
        next(new AppError("Failed to fetch exam", 500))
    }
};

export const patchExamByIdMiddle = async (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return next(new AppError("Invalid id",400))
    }

    try {
        const service = Core.getService("ExamO_Service");

        const exam = await service.getExamById(parsedId);
        if (!exam) {
            return res.status(404).send("Exam not found");
        }
        req.foundExamIndex = exam;
        req.patchedExam = { ...exam, ...req.body };
        next();
    } catch (err) {
        res.status(500).send("Failed to fetch exam");
    }
};

export const deleteExamByIdMiddle = async (req, res, next) => {
    const { id } = req.params;
    const parsedId = parseInt(id);

    if (isNaN(parsedId)) {
        return res.status(400).send("Invalid id");
    }

    try {
        const service = Core.getService("ExamO_Service");

        const exam = await service.getExamById(parsedId);
        if (!exam) {
            return next(new AppError("Exam not found",404));        
        }
        req.exam = exam;
        next();
    } catch (err) {
        res.status(500).send("Failed to fetch exam");
    }
};

export const Validate = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        let error = {};
        errors.array().map((err) => (error[err.param] = err.msg));
        return res.status(422).json({ error });
    }
    next();
};

export const Verify = async (req, res, next) => {
    try {
        const service = Core.getService("User_Service");
      const authHeader = req.headers["cookie"]; // get the session cookie from request header
  
      if (!authHeader) return res.sendStatus(401); // if there is no cookie from request header, send an unauthorized response.
      const cookie = authHeader.split("=")[1]; // If there is, split the cookie string to get the actual jwt
  
      const accessToken = cookie.split(";")[0];
      const checkIfBlacklisted = await service.FindOneBlackist(accessToken); // Check if that token is blacklisted
      if (checkIfBlacklisted)
        return res
            .status(401)
            .json({ message: "This session has expired. Please login" });
      // Verify using jwt to see if token has been tampered with or if it has expired.
      // that's like checking the integrity of the cookie
      jwt.verify(cookie, process.env.SECRET_ACCESS_TOKEN, async (err, decoded) => {
        if (err) {
          // if token has been altered or has expired, return an unauthorized error
          return res
            .status(401)
            .json({ message: "This session has expired. Please login" });
        }
  
        const { id } = decoded; // get user id from the decoded token
        const user = await service.findByID(id); // find user by that `id`
        const { password, ...data } = user; // return user object without the password
        req.user = data; // put the data object into req.user
        next();
      });
    } catch (err) {
      res.status(500).json({
        status: "error",
        code: 500,
        data: [],
        message: "Internal Server Error",
      });
    }
};

// można stworzyć osobne middleware dla każdej z roli albo przepuszczać przez next() odpowiednie komunikaty
export const VerifyRole = (req, res, next)=> {
    try {
        const user = req.user;
        const { role } = user;
        
        // tu sprawdzamy czy  ktoś jest adminem jeżeli tak przepuszczamy dalej
        /*
        nazewnictwo ról:
        admin: 0x88
        user: 0x01 
        */
        if (role !== "0x88") {
            return res.status(401).json({
                status: "failed",
                message: "You are not authorized to view this page.",
            });
        }
        next();
    } catch (err) {
        res.status(500).json({
            status: "error",
            code: 500,
            data: [],
            message: "Internal Server Error",
        });
    }
}