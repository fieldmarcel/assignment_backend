let data = [];
let id = 1;

const getAllTasks = (req, res) => {
    console.log("Fetching all tasks",data);
    res.status(200).json(data);
};

const getTaskbyId = (req, res) => {
    console.log(`Fetching task with id: ${req.params.id}`);
    const task = data.find(task => task.id === parseInt(req.params.id));
    if (!task) {
        console.log("Task not found");
        return res.status(404).json({ message: "Task not found" });
    }
    res.status(200).json(task);
};

const createTask = (req, res) => {
    console.log("Creating new task");
    const newTask = {
        id: id++,
        title: req.body.title,
        description: req.body.description,
    };
    data.push(newTask);
    console.log("Task created:", newTask);
    res.status(201).json({ message: "Task added successfully", newTask });
};

const updateTask = (req, res) => {
    console.log(`Updating task with id: ${req.params.id}`);
    const task = data.find(task => task.id === parseInt(req.params.id));
    if (!task) {
        console.log("Task not found for update");
        return res.status(404).json({ message: "Task not found" });
    }
    task.title = req.body.title;
    task.description = req.body.description;
    console.log("Task updated:", task);
    res.status(200).json({ message: "Task updated successfully", task });
};

const deleteTask = (req, res) => {
    console.log(`Deleting task with id: ${req.params.id}`);
    const index = data.findIndex(task => task.id === parseInt(req.params.id));
    if (index === -1) {
        console.log("Task not found for deletion");
        return res.status(404).json({ message: "Task not are found" });
    }
    const deleted = data.splice(index, 1);
    console.log("Task deleted:", deleted[0]);
    res.status(200).json({ message: "Task deleted successfully", task: deleted[0] });
};

const taskController = {
    getAllTasks,
    getTaskbyId,
    createTask,
    updateTask,
    deleteTask,
};

export default taskController;
