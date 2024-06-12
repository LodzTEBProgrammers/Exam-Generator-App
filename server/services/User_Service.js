import { pool } from "../mySqlDb/db/db.js";
import bcrypt from 'bcrypt';
import AppError from "../utils/ErrorHandler.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

class UserService {
  constructor() {
    this.name = "UserService";
  }

  generateAccessJWT(userId) {
    const payload = {
      id: userId,
    };
    return jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {
      expiresIn: '20m',
    });
  }

  async save(user, next) {
    try {
      if (!user || !user.password) {
         next(new AppError('User object or password is undefined'));
      }

      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);

      const [result] = await pool.query(
        'INSERT INTO users (email, password, first_name, last_name) VALUES (?, ?, ?, ?)',
        [user.email, user.password, user.first_name, user.last_name]
      );

      return result;  
    } catch (err) {
      next(err);  
    }
  }

  async findOne(email) {
    const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length ? rows[0] : null;
  }

  async register(req, res, next) {
    const { first_name, last_name, email, password } = req.body;

    try {
      const existingUser = await this.findOne(email);
      if (existingUser) {
        return res.status(400).json({
          status: "failed",
          data: [],
          message: "It seems you already have an account, please log in instead.",
        });
      }

      const newUser = { first_name, last_name, email, password };
      await this.save(newUser, next);

      res.status(200).json({
        status: "success",
        data: [{ first_name, last_name, email }],
        message: "Thank you for registering with us. Your account has been successfully created.",
      });
    } catch (err) {
      next(err);
    }
  }

  async findByID(id) {
    const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    return rows.length ? rows[0] : null;
  }

  async login(req, res, next) {
    const { email, password } = req.body;

    try {
      const existingUser = await this.findOne(email);
      if (!existingUser) {
        return res.status(401).json({
          status: "failed",
          data: [],
          message: "Invalid email or password. Please try again with the correct credentials.",
        });
      }

      const isPasswordValid = await bcrypt.compare(password, existingUser.password);
      if (!isPasswordValid) {
        return res.status(401).json({
          status: "failed",
          data: [],
          message: "Invalid email or password. Please try again with the correct credentials.",
        });
      }

      const options = {
        maxAge: 20 * 60 * 1000, 
        httpOnly: true, 
        secure: true,
        sameSite: "None",
      };
      const token = this.generateAccessJWT(existingUser.id); 
      res.cookie("SessionID", token, options); 
      res.status(200).json({
        status: "success",
        message: "You have successfully logged in.",
      });
    } catch (err) {
      next(new AppError(err,404));
    }
  }
  async Logout(req, res) {
    try {
      const authHeader = req.headers['cookie']; // get the session cookie from request header
      if (!authHeader) return res.sendStatus(204); // No content
      const cookie = authHeader.split('=')[1]; // If there is, split the cookie string to get the actual jwt token
      const accessToken = cookie.split(';')[0];
      const checkIfBlacklisted = await Blacklist.findOne({ token: accessToken }); // Check if that token is blacklisted
      // if true, send a no content response.
      if (checkIfBlacklisted) return res.sendStatus(204);
      // otherwise blacklist token
      const newBlacklist = new Blacklist({
        token: accessToken,
      });
      await newBlacklist.save();
      // Also clear request cookie on client
      res.setHeader('Clear-Site-Data', '"cookies"');
      res.status(200).json({ message: 'You are logged out!' });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error',
      });
    }
    res.end();
  }
  
}

export default new UserService();
