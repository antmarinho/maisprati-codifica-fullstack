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

        let id = localStorage.getItem('id')
		
		

        if(id === null)
            localStorage.setItem('id',0)

    }

    getTasks() {

        let tasks = Array()

        let id = localStorage.getItem('id')

        for (let i = 1; i <= id; i++) {
           
            let task = JSON.parse(localStorage.getItem(i))
            
            if(task === null)
                continue

            task.id = i
            tasks.push(task)
        
        }
              
        return tasks

    }

    createTask(task) {

        let id = getNextId();

        localStorage.setItem(id, JSON.stringify(task))
        localStorage.setItem('id',id);

    }

    removeTask(id) {

        localStorage.removeItem(id)

    }

    searchTasks(task) {

        let arrFiltered = Array()

        arrFiltered = this.getTasks()

        if(task.year !== '')
            arrFiltered = arrFiltered.filter(t => t.year === task.year)

        if(task.month !== '')
            arrFiltered = arrFiltered.filter(t => t.month === task.month)
        
        if(task.day !== '')
            arrFiltered = arrFiltered.filter(t => t.day === task.day)

        if(task.type !== '')
            arrFiltered = arrFiltered.filter(t => t.type === task.type)

        if(task.description !== '')
            arrFiltered = arrFiltered.filter(t => t.description === task.description)

        return arrFiltered

    }

}

const db = new Database()

function getNextId() {

    let nextId = localStorage.getItem('id');

    return parseInt(nextId) + 1;

}

function registerTask() {

    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value

    let task = new Task(year, month, day, type, description)

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

function loadTasks(tasks) {

    if(tasks === undefined)
       tasks = db.getTasks()
    
    let listTask = document.getElementById("list-task")

    listTask.innerHTML = ''

    tasks.forEach((t) => {

        const row = listTask.insertRow()

        row.insertCell(0).innerHTML = `${t.day}/${t.month}/${t.year}`
        row.insertCell(1).innerHTML = `${type(parseInt(t.type))}`
        row.insertCell(2).innerHTML = `${t.description}`

        const btn = document.createElement('button')

        btn.className = 'btn btn-danger'
        btn.id = t.id
        btn.innerHTML = 'Delete'
        btn.onclick = () => {
            
            let id = t.id

            db.removeTask(id)

            window.location.reload()

        }

        row.insertCell(3).append(btn)

    })
    
}

function searchTask() {

    let year = document.getElementById('year').value
    let month = document.getElementById('month').value
    let day = document.getElementById('day').value
    let type = document.getElementById('type').value
    let description = document.getElementById('description').value

    let task = new Task(year, month, day, type, description)

    let tasks = db.searchTasks(task)

    loadTasks(tasks)

}

document.addEventListener("DOMContentLoaded", () => {

    if(document.body.contains(document.getElementById('list-task')))
        loadTasks()

})