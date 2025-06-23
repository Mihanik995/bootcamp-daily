import ToDoList from "./todo.js";

const toDo = new ToDoList()

toDo.addTask('do dishes')
toDo.addTask('clean the room')
toDo.addTask('do course homework')

toDo.markAsCompleted('do dishes')

toDo.listAll()