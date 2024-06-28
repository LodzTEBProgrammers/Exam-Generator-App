import { pool } from "../mySqlDb/db/db.js";

class ExamO_Service{
    constructor(){
      this.name = "ExamO_Service"
    }

    async getAllTasks() {
      try {
        const [rows] = await pool.query("SELECT * FROM tasks");
        return rows;
      } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
      }
    }

    async test(){
      return "test"
    }

    async getAllExams() {
      try {
        const [rows] = await pool.query(`
          SELECT e.id as exam_id, e.name as exam_name, e.dateFrom, e.dateTo, e.user_id,
                  t.id as task_id, t.name as task_name, t.a, t.b, t.c, t.trueAnswer
          FROM examsonline e
          LEFT JOIN exam_tasks et ON e.id = et.exam_id
          LEFT JOIN tasks t ON et.task_id = t.id
        `);
  
        const examsMap = new Map();
        rows.forEach(row => {
          if (!examsMap.has(row.exam_id)) {
            examsMap.set(row.exam_id, {
              id: row.exam_id,
              name: row.exam_name,
              dateFrom: row.dateFrom,
              dateTo: row.dateTo,
              user_id: row.user_id,
              tasks: []
            });
          }
          if (row.task_id) {
            examsMap.get(row.exam_id).tasks.push({
              id: row.task_id,
              name: row.task_name,
              a: row.a,
              b: row.b,
              c: row.c,
              trueAnswer: row.trueAnswer
            });
          }
        });
  
        return Array.from(examsMap.values());
      } catch (error) {
        console.error("Error fetching exams:", error);
        throw error;
      }
    }

    // Do optymalizacji w wolnym czasie
    async getExamById(id) {
        const [rows] = await pool.query("SELECT * FROM examsonline WHERE id = ?", [id]);
        return rows[0];
    }

    async getExamWithTasksById(id) {
      const [rows] = await pool.query(`
          SELECT e.id as exam_id, e.name as exam_name, e.dateFrom, e.dateTo, e.user_id,
                  t.id as task_id, t.name as task_name, t.a, t.b, t.c, t.trueAnswer
          FROM examsonline e
          LEFT JOIN exam_tasks et ON e.id = et.exam_id
          LEFT JOIN tasks t ON et.task_id = t.id
          WHERE e.id = ?
      `, [id]);

      if (rows.length === 0) {
          return null;
      }

      const exam = {
          id: rows[0].exam_id,
          name: rows[0].exam_name,
          dateFrom: rows[0].dateFrom,
          dateTo: rows[0].dateTo,
          user_id: rows[0].user_id,
          tasks: rows.filter(row => row.task_id !== null).map(row => ({
              id: row.task_id,
              name: row.task_name,
              a: row.a,
              b: row.b,
              c: row.c,
              trueAnswer: row.trueAnswer
          }))
      };

      return exam;
    }
    // ...

    async createExam(exam) {
      const { name, dateFrom, dateTo, user_id } = exam;
      const [result] = await pool.query(
          "INSERT INTO examsonline (name, dateFrom, dateTo, user_id) VALUES (?, ?, ?, ?)",
          [name, dateFrom, dateTo, user_id]
      );

      return result.insertId;
    }

    async updateExam(id, exam) {
      const { name, dateFrom, dateTo, user_id } = exam;
      await pool.query(
          "UPDATE examsonline SET name = ?, dateFrom = ?, dateTo = ?, user_id = ? WHERE id = ?",
          [name, dateFrom, dateTo, user_id, id]
      );
    }

    async deleteExam(id) {
      await pool.query("DELETE FROM examsonline WHERE id = ?", [id]);
    }

    async getExamsByUser(userId) {
      const [rows] = await pool.query("SELECT * FROM examsonline WHERE user_id = ?", [userId]);
      return rows;
    }

    async addTaskToExam(examId, taskId) {
      await pool.query("INSERT INTO exam_tasks (exam_id, task_id) VALUES (?, ?)", [examId, taskId]);
    }
}

export default new ExamO_Service();