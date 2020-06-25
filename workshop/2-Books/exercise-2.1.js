// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

// Create Book Class
class Book {
    constructor(title, genre, author, isRead) {
        this.title = title;
        this.genre = genre;
        this.author = author;
        this.isRead = isRead || false;
    };
}

// Declare book objects
let book1 = new Book('1984', 'Classics', 'George Orwell', true);
let book2 = new Book('The Lord of the Rings', 'Fantasy', 'J.R.R. Tolkien');
let book3 = new Book('Dr. Jekyll and Mr. Hyde', 'Classics', 'Robert Louis Stevenson', true);
let book4 = new Book('The Hobbit, or There and Back Again', 'Fantasy', 'J.R.R. Tolkien', false);
let book5 = new Book('The Hunger Games', 'Young Adult', 'Suzanne Collins');

console.log(book1, book2, book3, book4, book5);
