export default class ToDoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({task, completed: false});
    }

    markAsCompleted(task) {
        this.tasks.find(elem => elem.task === task).completed = true;
    }

    listAll() {
        console.log(this.tasks);
    }
}