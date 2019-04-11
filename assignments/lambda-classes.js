// CODE here for your Lambda Classes


class Person {
    constructor(attributes){
        this.name = attributes.name;
        this.age = attributes.age;
        this.location = attributes.location;
        this.gender = attributes.gender;
    }
    //methods 
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}. `
    }
}// Person


class Instructor extends Person {
    constructor(instructorInfo){
        super(instructorInfo);
        this.specialty = instructorInfo.specialty;
        this.favLanguage = instructorInfo.favLanguage;
        this.catchPhrase = instructorInfo.catchPhrase;
    }
    //Methods
    demo(subject){
        return `Today we are learning about ${subject}`;
    }

    grades(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }

    graduate(student){
        let randomN = Math.floor(Math.random() * 11) -5 + student.grade;
        let newGrade = randomN;
        student.grade = newGrade;
        if (newGrade <=69){
            return `${student.name} has not passed!`
        }
        else {
            return `${student.name} has passed.`
        }
    }

} //Instructor

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
        this.grade = studentInfo.grade;
    }
    //Methods
    listSubjects(){
        return (this.favSubjects);
    }
    
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}//Student

class ProjectManagers extends Instructor {
    constructor(PMinfo){
        super(PMinfo);
        this.gradClassName = PMinfo.gradClassName;
        this.favInstructor = PMinfo.favInstructor;
    }
    //Methods
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugsCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}. `;
    }
}
//Instructors
const josh = new Instructor ({
    name: 'Josh',
    age: '36',
    location: 'Utah',
    gender: 'male',
    specialty: 'Front End',
    favLanguage: 'Javascript',
    catchPhrase: 'I love the Banjo!'

});

const ryan = new Instructor ({
    name: 'Ryan',
    age: '32',
    location: 'Arizona',
    gender: 'male',
    specialty: 'Front End',
    favLanguage: 'HTML',
    catchPhrase: 'To the Batmobile!'

});


const leo = new Student({
    age:26,
    name: 'Leo',
    location: 'Bedrock',
    gender: 'male',
    previousBackground: "Bar Manager",
    className: "Web19",
    favSubjects: ['html', 'css', 'Javascript'],
    grade: 67
});


const kevin = new Student({
    age:25,
    name: 'Kevin',
    location: 'Houston',
    gender: 'male',
    previousBackground: "Sales",
    className: "Web17",
    favSubjects: ['html', 'css', 'Javascript'],
    grade: 85,
});


const Sam = new ProjectManagers({
    age: 36,
    name: 'Sam',
    location: 'OKC',
    gender: 'male',
    specialty: 'Front End',
    favLanguage: 'Javascript',
    catchPhrase: 'I love fantasy sports!',
    gradClassName: "Web17",
    favInstructor: "Josh"
});


const katie = new ProjectManagers({
    age: 30,
    name: 'Katie',
    location: 'Washington',
    gender: 'female',
    specialty: 'Redux',
    favLanguage: 'Javascript',
    catchPhrase: 'How YOU doin',
    gradClassName: "Web17",
    favInstructor: "Josh"
});
console.log(leo.listSubjects());

console.log(josh.graduate(leo));