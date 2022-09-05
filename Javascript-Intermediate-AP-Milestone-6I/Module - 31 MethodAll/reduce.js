const sum = [1, 2, 3, 4, 5];
// step-1 = previous = 0; current = 1; ----> 1
// step-2 = previous = 1; current = 2; ----> 3
// step-3 = previous = 3; current = 3; ----> 6
// step-2 = previous = 6; current = 4; ----> 10
// step-2 = previous = 10; current = 5; ----> 15
const total = sum.reduce((previous, current) => previous + current );
console.log(total);


// ------------------------notation methoed----------------------------

const student = {
    name: 'alim', 
    age: 18,
    class: 'Ten',
    marks: {
        math: 60,
        bangla: 79,
        physics:80,
    }
}
const {math} = student.marks;
console.log(math);


const marks  = student.marks.bangla;
console.log(marks);