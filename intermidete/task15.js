// Task 15: Implement a Basic To-Do List - Create a simple to-do list application where tasks can be added and marked as complete.
const toDoList = [];
const addTask = (task) => toDoList.push({ task, completed: false });
const completeTask = (index) => { if (toDoList[index]) toDoList[index].completed = true; };
const showTasks = () => console.log(toDoList);

addTask("Learn JavaScript");
addTask("Build a To-Do List");
completeTask(0);
showTasks();
