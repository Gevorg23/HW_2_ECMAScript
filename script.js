// Задание 1: "Управление библиотекой книг"

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
}

const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224);
book1.displayInfo();

const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
book2.displayInfo();


// Задание 2: "Управление списком студентов"

class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
    }
}

const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();

const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

//______________________________________________________________________

// class Book {
//     constructor(title, author, pages) {
//         this.title = title;
//         this.author = author;
//         this.pages = pages;
//     }

//     displayInfo() {
//         return `Title: ${this.title}<br>Author: ${this.author}<br>Pages: ${this.pages}<br><br>`;
//     }
// }

// class Student {
//     constructor(name, age, grade) {
//         this.name = name;
//         this.age = age;
//         this.grade = grade;
//     }

//     displayInfo() {
//         return `Name: ${this.name}<br>Age: ${this.age}<br>Grade: ${this.grade}<br><br>`;
//     }
// }

// const libraryInfoDiv = document.getElementById('library-info');
// const studentsInfoDiv = document.getElementById('students-info');

// const book1 = new Book("The Catcher in the Rye", "J.D. Salinger", 224);
// libraryInfoDiv.innerHTML += book1.displayInfo();

// const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
// libraryInfoDiv.innerHTML += book2.displayInfo();

// const student1 = new Student("John Smith", 16, "10th grade");
// studentsInfoDiv.innerHTML += student1.displayInfo();

// const student2 = new Student("Jane Doe", 17, "11th grade");
// studentsInfoDiv.innerHTML += student2.displayInfo();
