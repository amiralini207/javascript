const student ={
    name : 'amir ali' ,
    last : 'njati',
    id : 11111,
    curses :['javascript' , 'html' , 'css'],
    address : { country : 'iran' , city : 'tehran'}
}

console.log(student);

console.log(student.name);
console.log(student.address.city);
console.log(student.curses[0]);

console.log(student['name']);

let key = "last";
console.log(student[key]);

student.curses = "javascript , html";
console.log(student);

student.email = "amyrlynjaty4@gmail.com"
console.log(student)
