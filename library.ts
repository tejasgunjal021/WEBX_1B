class Student {
    name: string;
    studentId: number;
    grade: string;

    constructor(name: string, studentId: number, grade: string) {
        this.name = name;
        this.studentId = studentId;
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Student ID: ${this.studentId}, Grade: ${this.grade}`;
    }
}

class GraduateStudent extends Student {
    thesisTopic: string;

    constructor(
        name: string,
        studentId: number,
        grade: string,
        thesisTopic: string,
    ) {
        super(name, studentId, grade);
        this.thesisTopic = thesisTopic;
    }

    getDetails(): string {
        return `${super.getDetails()}, Thesis Topic: ${this.thesisTopic}`;
    }

    getThesisTopic(): string {
        return `Thesis Topic: ${this.thesisTopic}`;
    }
}

class LibraryAccount {
    accountId: number;
    booksIssued: number;

    constructor(accountId: number, booksIssued: number) {
        this.accountId = accountId;
        this.booksIssued = booksIssued;
    }

    getLibraryInfo(): string {
        return `Account ID: ${this.accountId}, Books Issued: ${this.booksIssued}`;
    }
}

const student1 = new Student("Tejas Gunjal", 101, "A");
const gradStudent1 = new GraduateStudent(
    "Tejas Gunjal",
    102,
    "B+",
    "AI in Healthcare",
);
const libraryAccount1 = new LibraryAccount(201, 3);

console.log(student1.getDetails());
console.log(gradStudent1.getDetails());
console.log(libraryAccount1.getLibraryInfo());
