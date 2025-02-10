//2.7.1.1 Module 2 LAB 1 => LAB 4 (https://edube.org/learn/jsa/lab-13)
class User {
    constructor({ name, surname, email, role }) {
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.role = role;
        this.courses = [];
        this.messageHistory = [];
    }

    addCourse(course, level) {
        this.courses.push({ course, level });
        console.log(`Course ${course} added at level ${level}!`);
    }

    removeCourse(course) {
        this.courses = this.courses.filter((c) => c.course !== course);
        console.log(`Course ${course} removed!`);
    }

    editCourse(course, level) {
        let courseIndex = this.courses.findIndex((c) => c.course === course);
        if (courseIndex !== -1) {
            this.courses[courseIndex].level = level;
            console.log(`Course ${course} edited to level ${level}!`);
        } else {
            console.log(`Course ${course} not found!`);
        }
    }

    sendMessage(from, message) {
        this.messageHistory.push({ from, message, sentAt: new Date() });
        const sendEmail = (from, to, message) => {
            console.log(`*****(New Email)*****`);
            console.log(`FROM: ${from.email}`);
            console.log(`TO: ${to.email}`);
            console.log(`MESSAGE: ${message}`);
            console.log(`________________________`);
        };
        sendEmail(from, this, message);
    }

    showMessagesHistory() {
        console.log("Message History:");
        for (let message of this.messageHistory) {
            console.log(`FROM: ${message.from.name}`);
            console.log(`SENT ON: ${message.sentAt}`);
            console.log(`MESSAGE: ${message.message}`);
            console.log(`- - - - - - - - - - -`);
        }
    }
}

let student1 = new User({ name: 'Rafael', surname: 'Fife', email: 'rfife@rhyta.com', role: 'student' });
let student2 = new User({ name: 'Kelly', surname: 'Estes', email: 'k_estes@dayrep.com', role: 'student' });
let teacher1 = new User({ name: 'Paula', surname: 'Thompkins', email: 'PaulaThompkins@jourrapide.com', role: 'teacher' });

student1.addCourse('maths', 2);
student1.addCourse('physics', 1);
student1.removeCourse('physics');
teacher1.addCourse('biology', 3);
teacher1.editCourse('biology', 4);
console.log(`${student1.name}: ${student1.courses.length} courses`);
console.log(`${teacher1.name}: ${teacher1.courses.length} courses`);
teacher1.sendMessage(student1, 'test message');
teacher1.sendMessage(student1, 'another message');
teacher1.showMessagesHistory();

class ExtendedUser extends User {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: '' });
    }

    set fullName(fullName) {
        let [name, surname] = fullName.split(' ');
        this.name = name;
        this.surname = surname;
    }

    get fullName() {
        return `${this.name} ${this.surname}`;
    }

    static match(student, teacher, courseName) {
        let studentCourses = student.courses.filter((c) => c.course === courseName);
        let teacherCourses = teacher.courses.filter((c) => c.course === courseName);
        let result = [];

        if (studentCourses.length > 0 && teacherCourses.length > 0) {
            for (let studentCourse of studentCourses) {
                result = teacherCourses.filter((c) => c.level === studentCourse.level);
                if (result.length !== 0) {
                    console.log(result.length);
                    return `${student.fullName} and ${teacher.fullName} have ${result[0].course} at level ${result[0].level} in common`;
                }
            }
        }
    }
}

student1.fullName = 'Rafael Fifer';
console.log(`${student1.fullName}: ${student1.courses.length} courses`);

teacher1.fullName = 'Paula Thompkins';
student1.addCourse('physics', 2);
student1.addCourse('biology', 2);
student1.addCourse('maths', 5);
teacher1.addCourse('physics', 2);
teacher1.addCourse('biology', 2);
teacher1.addCourse('maths', 5);

let match = ExtendedUser.match(student1, teacher1, 'physics');
if (match) {
    console.log(match);
}

class Teacher extends User {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'Teacher' });
    }
}

class Student extends User {
    constructor({ name, surname, email }) {
        super({ name, surname, email, role: 'Student' });
    }
}

class Tutoring {
    constructor() {
        this.students = [];
        this.teachers = [];
    }

    getStudentByName(name, surname) {
        return this.students.find((student) => student.name === name && student.surname === surname);
    }

    getTeacherByName(name, surname) {
        return this.teachers.find((teacher) => teacher.name === name && teacher.surname === surname);
    }

    getStudentsForTeacher(teacher) {
        return this.students.filter((student) =>
            student.courses.some((sc) => teacher.courses.some((tc) => tc.course === sc.course))
        );
    }

    getTeacherForStudent(student) {
        return this.teachers.filter((teacher) =>
            teacher.courses.some((tc) => student.courses.some((sc) => sc.course === tc.course))
        );
    }

    addStudent(name, surname, email) {
        this.students.push(new Student({ name, surname, email }));
    }

    addTeacher(name, surname, email) {
        this.teachers.push(new Teacher({ name, surname, email }));
    }
}

let tutoring = new Tutoring();

tutoring.addStudent('Rafael', 'Fife', 'rfife@rhyta.com');
tutoring.addStudent('Kelly', 'Estes', 'k_estes@dayrep.com');
tutoring.addTeacher('Paula', 'Thompkins', 'PaulaThompkins@jourrapide.com');

let student3 = tutoring.getStudentByName('Rafael', 'Fife');
student3.addCourse('maths', 2);
student3.addCourse('physics', 4);

let teacher3 = tutoring.getTeacherByName('Paula', 'Thompkins');
teacher3.addCourse('maths', 6);
teacher3.addCourse('physics', 4); 

let students = tutoring.getTeacherForStudent(student3);
let teachers = tutoring.getStudentsForTeacher(teacher3);

console.log("Students for teacher3:", students.length > 0 ? students[0] : "No match found!");
console.log("Teachers for student3:", teachers.length > 0 ? teachers[0] : "No match found!");

let studentKelly = tutoring.getStudentByName('Kelly', 'Estes');
studentKelly.addCourse('maths', 6); 
studentKelly.addCourse('physics', 4);

students = tutoring.getTeacherForStudent(studentKelly);
teachers = tutoring.getStudentsForTeacher(teacher3);

console.log("Students for teacher3 (after fixing Kelly):", students.length > 0 ? students[0] : "No match found!");
console.log("Teachers for student3 (after fixing Kelly):", teachers.length > 0 ? teachers[0] : "No match found!");
