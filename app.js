let students = [{
    name: 'Ben',
    id: 123,
    grade: 80
}, {
    name: 'Chel-C',
    id: 290,
    grade: 90
}, {
    name: 'David',
    id: 654,
    grade: 81
}, {
    name: 'Russ',
    id: 972,
    grade: 79
}, {
    name: 'Chel-F',
    id: 891,
    grade: 7
}]

function findStudentByIdForLoop(arr, id) {
    //look at each element
    let out = {}
    for (let i = 0; i < arr.length; i++) {
        let student = arr[i];
        //if the students id matches the id provided
        if (student.id == id) {
            //return that student
            out = student
        }
    }
    return out
}

function findStudentByIdFindMethod(arr, id) {
    return arr.find(student => student.id == id)
}

let result = findStudentByIdForLoop(students, 890)
let result2 = findStudentByIdFindMethod(students, 890)
console.log(result)
console.log(result2)


function filterByIdValue(arr, minValue) {
    let out = []
    for (let i = 0; i < arr.length; i++) {//look at each student
        let student = arr[i]; //alias of the object at current itteration
        if (student.id > minValue) {
            out.push(student)
        }
    }
    return out
}

function filterWithMethod(arr, minGrade) {
    return arr.filter(student => student.grade > minGrade)
}

let filtered = filterByIdValue(students, 300)
console.log(filtered)


function greetStudentsWithForLoop(arr) {
    for (let i = 0; i < arr.length; i++) {
        let student = arr[i];
        sayHello(student.name)
    }
}

function greetStudentsForEach(arr) {
    arr.forEach(student => sayHello(student.name))
}

function gradeAverage(arr) {
    let out = 0
    arr.forEach(student => {
        out += student.grade
    })
    return out / arr.length
}


greetStudentsWithForLoop(students)
//greetStudentsForEach(students)
let grade = gradeAverage(students)
//console.log(grade)



function count(from, to, by) {
    for (let i = from; i <= to; i += by) {
        console.log(i)
    }
}

count(8, 20, 2)































function sayHello(name, formal) {
    console.log(1)
    if (!formal) {
        console.log(2)
        console.log('Hi ' + name)
        return
    }
    console.log(2)
    formalGreeting(name)
    console.log(4)
}


// function formalGreeting(name) {
//     console.log(3)
//     console.log('Greetings ' + name)
// }

let result3 = sayHello('mark', false)
console.log(result3)
// sayHello('brooklyn', true)
