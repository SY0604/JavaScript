// Implement a Basic To-Do List: Create a simple to-do list application where tasks can be added and marked as complete.
const toDoList = [];

const addTask = (task) => toDoList.push({ task, completed: false });
const completeTask = (index) => toDoList[index].completed = true;
const showTasks = () => toDoList.forEach((item, index) => console.log(`${index + 1}. ${item.task} - ${item.completed ? "Completed" : "Pending"}`));

addTask("Buy groceries");
addTask("Complete homework");
completeTask(0);
showTasks();
