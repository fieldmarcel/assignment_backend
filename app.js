import express from 'express';
import router from './routes/tasks.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/tasks", router);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
