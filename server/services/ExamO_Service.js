import { pool } from "../mySqlDb/db/db.js";

class ExamO_Service {
  constructor() {
      this.name = "ExamO_Service";
  }

  async getAllTasks() {
    try {
        const [rows] = await pool.query("SELECT * FROM tasks");
        console.log("Fetched tasks:", rows); // Add this line for debugging
        return rows;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
}
  async getTask(taskId){
    try {
        const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?",[taskId]);
        return rows;
    }catch(error){
        console.error("Error fetching task:", error);
    }
  }
  async test() {
      return "test";
  }

  async getAllExams() {
      try {
          const [rows] = await pool.query(`
              SELECT e.id as exam_id, e.name as exam_name, e.description, e.dateFrom, e.dateTo, e.user_id, e.status,
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
                      description: row.description,
                      dateFrom: row.dateFrom,
                      dateTo: row.dateTo,
                      user_id: row.user_id,
                      status: row.status,
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

  async getExamById(id) {
      try {
          const [rows] = await pool.query("SELECT * FROM examsonline WHERE id = ?", [id]);
          return rows[0];
      } catch (error) {
          console.error("Error fetching exam by id:", error);
          throw error;
      }
  }

  async getExamWithTasksById(id) {
      try {
          const [rows] = await pool.query(`
              SELECT e.id as exam_id, e.name as exam_name, e.description, e.dateFrom, e.dateTo, e.user_id, e.status,
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
              description: rows[0].description,
              dateFrom: rows[0].dateFrom,
              dateTo: rows[0].dateTo,
              user_id: rows[0].user_id,
              status: rows[0].status,
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
      } catch (error) {
          console.error("Error fetching exam with tasks by id:", error);
          throw error;
      }
  }

  async createExam(exam) {
      const { name, description, dateFrom, dateTo, user_id, status } = exam;
      try {
          const [result] = await pool.query(
              "INSERT INTO examsonline (name, description, dateFrom, dateTo, user_id, status) VALUES (?, ?, ?, ?, ?, ?)",
              [name, description, dateFrom, dateTo, user_id, status]
          );

          return result.insertId;
      } catch (error) {
          console.error("Error creating exam:", error);
          throw error;
      }
  }

  async updateExam(id, exam) {
      const { name, description, dateFrom, dateTo, user_id, status } = exam;
      try {
          await pool.query(
              "UPDATE examsonline SET name = ?, description = ?, dateFrom = ?, dateTo = ?, user_id = ?, status = ? WHERE id = ?",
              [name, description, dateFrom, dateTo, user_id, status, id]
          );
      } catch (error) {
          console.error("Error updating exam:", error);
          throw error;
      }
  }

  async deleteExam(id) {
      try {
          await pool.query("DELETE FROM examsonline WHERE id = ?", [id]);
      } catch (error) {
          console.error("Error deleting exam:", error);
          throw error;
      }
  }

  async getExamsByUser(userId) {
      try {
          const [rows] = await pool.query("SELECT * FROM examsonline WHERE user_id = ?", [userId]);
          return rows;
      } catch (error) {
          console.error("Error fetching exams by user:", error);
          throw error;
      }
  }
 
 
  async addTaskToExam(examId, taskId) {
      try {
          await pool.query("INSERT INTO exam_tasks (exam_id, task_id) VALUES (?, ?)", [examId, taskId]);
      } catch (error) {
          console.error("Error adding task to exam:", error);
          throw error;
      }
  }

  async updateExamStatus(id, status) {
      try {
          await pool.query("UPDATE examsonline SET status = ? WHERE id = ?", [status, id]);
      } catch (error) {
          console.error("Error updating exam status:", error);
          throw error;
      }
  }

  async getExamsByStatus(status) {
      try {
          const [rows] = await pool.query("SELECT * FROM examsonline WHERE status = ?", [status]);
          return rows;
      } catch (error) {
          console.error("Error fetching exams by status:", error);
          throw error;
      }
  }
}

export default new ExamO_Service();