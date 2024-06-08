import app from './app.js';
import dotenv from 'dotenv';
import Core from './core/Core.js';

dotenv.config();

const port = process.env.PORT_GLOBAL || 5005;

app.listen(port, async () => {
  try {
    await Core.loadServices();
    console.log("Server is running on port " + port);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});