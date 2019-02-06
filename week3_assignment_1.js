class Library {
  constructor() {
    this.books = [];
    this.cart = [];
  }

  addBook(book) {
    if (!(book instanceof Book)) throw Error("book should be of type Book");
    this.books.push(book);
  }

  removeBook(index) {
    this.books.splice(index, 1);
  }

  addBookToCart(index) {
    const [book] = this.books.splice(index, 1);
    this.cart.push(book);
  }

  listBooks() {
      this.books.forEach((book, index) => {
          console.log(`${index}: ${book.title}`);
      })
  }

  checkout() {
    console.log(`Thank you for buying from the library
        Your cart is ${this.cart.map(x => x.title).join("\n")}
        `);
    this.cart.length = 0;
  }
}

class Book {
  constructor(isbn, title, numberOfPages, author) {
    this.isbn = isbn;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.author = author;
  }
}

class Author {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const library = new Library();

library.addBook(
  new Book(
    "2434-432432",
    "JavaScript in practice",
    5435,
    new Author("Omar", "Simko")
  )
);

// library.addBook(new Book(
//     '65543-324324',
//     'JavaScript the good parts',
//     400,
//     new Author('Ali', 'Younis')
// ));

// library.addBook(new Book(
//     '54332-654643',
//     'Computer networking',
//     1000,
//     new Author('Omar', 'Jamal')
// ));

const library2 = new Library();

const lib = {
    books: [],
    cart: [],
    addBook(book) {
        this.books.push(book)
    },
    removeBook(index) {
        this.books.slice(index, 1)
    },
    listBooks() {
        // ....
    }
}

const lib2 = {
    books: [],
    cart: [],
    addBook(book) {
        this.books.push(book)
    },
    removeBook(index) {
        this.books.splice(index, 1)
    },
    listBooks() {
        // ....
    }
}

lib.addBook(new Book(
    '54332-654643',
    'Computer networking',
    1000,
    new Author('Omar', 'Jamal')
))


// console.log(lib instanceof Library);
// console.log(library instanceof Library);
// library.addBookToCart(1);

// console.log(library.cart);

// library.checkout();

// console.log(library.cart);


const bookTitlesInLibrary = [];
const bookIsbnsInLibrary = [];
const bookNumberOfPagesInLibrary = [];
const bookAuthorFirstNameInLibrary = [];
const bookAuthorLastNameInLibrary = [];

function addBookToLibrary(isbn, title, numberOfPages, authorFirstName, authorLastName) {
    bookIsbnsInLibrary.push(isbn);
    bookTitlesInLibrary.push(title);
    bookNumberOfPagesInLibrary.push(numberOfPages);
    bookAuthorFirstNameInLibrary.push(authorFirstName);
    bookAuthorLastNameInLibrary.push(authorLastName);
}

function listBooksInLibrary() {
    for (let i = 0; i < bookIsbnsInLibrary.length; i++) {
        console.log(`${i}: ${bookIsbnsInLibrary[i]}, ${bookTitlesInLibrary[i]}`)
    }
}

class School 
{
    constructor() {
        this.teachers = [];
        this.students = [];
    }

    /**
     * 
     * @param {Teacher} teacher 
     */
    addTeacher(teacher) {
        this.teachers.push(teacher);
    }

    fireTeacher(index) {
        this.teachers.splice(index, 1);
    }

    registerStudent(student) {
        this.students.push(student);
    }

    fireStudent(index) {
        this.students.splice(index, 1);
    }
}

class Student
{
    constructor(firstName, lastName, stage, college) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.stage = stage;
        this.college = college;
    }
}

class Teacher
{
    constructor(firstName, lastName, subject) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.subject = subject;
    }
}

const school = new School();

