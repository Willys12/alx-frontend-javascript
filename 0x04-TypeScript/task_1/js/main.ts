interface Teacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}
interface Directors extends Teacher {
    numberOfReports: number;
}

// function that prints teacher info.
// It returns the first letter of the firstName and the full lastName
function printTeacher(firstName: string, lastName: string) {
    return `${firstName.charAt(0)}. ${lastName}`;
}
//interface for the function named printTeacherFunction
interface printTeacherFunction {
    (teacher: Teacher): string;
}

// New requirements: StudentClass and its interfaces
interface StudentInterface {
    firstName: string;
    lastName: string;
    workOnHomework(): string;
    displayName(): string;
}
interface StudentConstructor {
    firstName: string;
    lastName: string;
}
// Implementation of the StudentClass
class StudentClass implements StudentInterface {
    firstName: string;
    lastName: string;

    constructor({ firstName, lastName }: StudentConstructor) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    workOnHomework(): string {
        return 'Currently working';
    }
    displayName(): string {
        return this.firstName; 
    }
}

//Usage for studentclass
const student = new StudentClass({ firstName: 'John', lastName: 'Doe' });
console.log(student.workOnHomework());
console.log(student.displayName());
