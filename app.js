import express from 'express';
import router from './routes/tasks.js';       

const app= express();

const port= process.env.PORT ||3000;




app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);

app.use(express.json());

app.use("/tasks",router);

})



