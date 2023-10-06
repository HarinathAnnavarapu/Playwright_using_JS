let title, author, genre, available
const books = []

addBook("JavaScript", "Harinath", "Programming Language")
checkOutBook("JavaScript")
returnBook("JavaScript")


addBook("Java", "Harinath", "Programming Language")
checkOutBook("Java")
returnBook("Java")


addBook("Python", "Harinath", "Programming Language")
checkOutBook("Python")
returnBook("Python")

listBooks()

function addBook(title, author, genre) {
    books.push(title)
    console.log(`Book with title - ${title} added successfully.`)
}

function checkOutBook(title) {
    console.log(`Book with title - ${title} is checked out & unavailable currently.`)
    return available = false
}


function returnBook(title) {
    console.log(`Book with title - ${title} is returned & available now.`)
    return available = true
}


function listBooks() {
    books.forEach(function(item, index) {
        console.log(`Book ${index + 1} - ${item}`)
    })
}

