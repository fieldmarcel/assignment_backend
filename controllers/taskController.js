const data= [];
const id= 1;

const getAllTasks= ((req,res)=>{
    res.status(200).json(data)
})

const getTaskbyId = ((req,res)=>{
    res.status(200).json(data.find(task=>task.id === parseInt(req.params.id)))

    if(!task){
        return res.status(404).json({message: "Task not found"})
    }

})
const createTask= ((req,res)=>{
    const newTask= {
        id:id++,
        title:req.body.title,
        description:req.body.description,
    }
    data.push(newTask);
    res.status(201).json({message:"task added successfully", newTask} );


});
const updateTask= ((req,res)=>{

    const task= data.find(task=>task.id ===parseInt(req.params.id));
    if(!task){
        return res.status(404).json({message: "Task not found"})
    }
    task.title= req.body.title;
    task.description= req.body.description;
    res.status(200).json({message:"task updated successfully", task} );
})
 
const deleteTask=((req,res)=>{  
    const task= data.find(task=>task.id ===parseInt(req.params.id));
    if(!task){
        return res.status(404).json({message: "Task not found"})
    }   
    data.splice(task,1);
    res.status(200).json({message:"task deleted successfully", task} );
})
const taskController = { getAllTasks, getTaskbyId, createTask, updateTask, deleteTask };
export default taskController;
