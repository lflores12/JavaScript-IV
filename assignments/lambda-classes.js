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

    grade(student, subject){
        return `${student.name} receives a perfect score on ${subject}`;
    }
} //Instructor

class Student extends Person {
    constructor(studentInfo){
        super(studentInfo);
        this.previousBackground = studentInfo.previousBackground;
        this.className = studentInfo.className;
        this.favSubjects = studentInfo.favSubjects;
    }
    //Methods
    listSubjects(){
        console.log(this.favSubjects);
    }
    
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}.`;
    }

    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}.`;
    }
}//Student

class ProjectManagers extends Instructor{
    constructor(PMinfo){
        super(PMinfo);
        this.gradClassName = PMinfo.gradClassName;
        this.favInstructor = PMinfo.favInstructor;
    }
    //Methods
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }

    debugCode(student, subject){
        return `${this.name} debugs ${student.name}'s code on ${subject}. `;
    }
}

const Josh = new Instructor ({
    name: 'Josh',
    age: '36',
    location: 'Utah',
    gender: 'male',
    specialty: 'Front End',
    favLanguage: 'Javascript',
    catchPhrase: 'I love the Banjo!'

});


const leo = new Student({
    age:36,
    name: 'Leo',
    location: 'Bedrock',
    gender: 'male',
    previousBackground: "Bar Manager",
    className: "Web19",
    favSubjects: ['html', 'css', 'Javascript']
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

console.log(Sam.debugCode(leo,'javascript'));