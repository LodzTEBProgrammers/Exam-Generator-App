import mongoose from "mongoose";
const TaskSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  a: {
    type: String,
    required: true
  },
  b: {
    type: String,
    required: true
  },
  c: {
    type: String,
    required: true
  },
  trueAnswer: {
    type: Number,
    required: true
  }
});

const ExamSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  dateFrom: {
    type: Date,
    required: true
  },
  dateTo: {
    type: Date,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  tasks: {
    type: [TaskSchema],
    required: true
  }
});

export default ExamSchema;
