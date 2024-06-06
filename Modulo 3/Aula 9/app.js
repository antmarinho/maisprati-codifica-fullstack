class Task {

    constructor(year, month, day, type, description) {

        this.year = year
        this.month = month
        this.day = day
        this.type = type
        this.description = description

    }

    validateData() {

        for (let i in this) {

            if(this[i] === undefined || this[i] === "") 
                return false

        }

        return true
    }
}

class Database {

    constructor() {

        const id = localStorage.getItem('id')

        if(id === null)
            localStorage.setItem('id',0)

    }

    getTasks() {

        const tasks = Array()

        const id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
           
            const task = JSON.parse(localStorage.getItem(i))
            
            if(task === null)
                continue

            task.id = i
            tasks.push(task)
        
        }
              
        return tasks

    }

    createTask(task) {

        const id = getNextId();

        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id',id);

    }

}

const db = new Database()

function getNextId() {

    const nextId = localStorage.getItem('id');

    return parseInt(nextId) + 1;

}

function registerTask() {

    const year = document.getElementById('year').value
    const month = document.getElementById('month').value
    const day = document.getElementById('day').value
    const type = document.getElementById('type').value
    const description = document.getElementById('description').value

    const task = new Task(year, month, day, type, description)

    if(task.validateData())
        db.createTask(task)

}

function type(type) {

    let x = ""

    switch (type) {

        case 1:
            x = 'Studies';
        break;

        case 2:
            x = 'Work';
        break;

        case 3:
            x = 'Home';
        break;

        case 4:
            x = 'Health';
        break;

        case 5:
            x = 'Family';
        break;
    
    }

    return x

}

function loadTasks() {
    
    const tasks = db.getTasks()

    const listTask = document.getElementById("list-task")

    tasks.forEach((t) => {

        const row = listTask.insertRow()

        row.insertCell(0).innerHTML = `${t.day}/${t.month}/${t.year}`
        row.insertCell(1).innerHTML = `${type(parseInt(t.type))}`
        row.insertCell(2).innerHTML = `${t.description}`

    })
    
}

document.addEventListener("DOMContentLoaded", () => {

    if(document.body.contains(document.getElementById('list-task')))
        loadTasks()

})