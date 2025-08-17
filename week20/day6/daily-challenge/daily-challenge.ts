interface Book {
    title: string
    author: string
    isbn: string
    publishedYear: number
    genre?: string
}

class Library {
    protected books: Book[]

    constructor(books: Book[]) {
        this.books = books;
    }

    public addBook(book: Book): void {
        this.books.push(book)
    }

    public getBookDetails(isbn: string): Book | null {
        const book = this.books.find(book => book.isbn === isbn)
        return book ? book : null
    }
}

class DigitalLibrary extends Library {
    readonly website: string

    constructor(website: string, books: Book[]) {
        super(books)
        this.website = website
    }

    public listBooks(): string[] {
        return this.books
            ? this.books.map((book: Book) => book.title)
            : []
    }
}

const books: Book[] = [
    {title: 'Stranger', author: 'Max Fry', isbn: '1111', publishedYear: 2016},
    {title: 'Lord of the Rings', author: 'John R. R. Tolkin', isbn: '2222', publishedYear: 1937},
]
const digitalLibrary = new DigitalLibrary('example.com', books)
console.log(digitalLibrary.listBooks())
console.log(digitalLibrary.getBookDetails('1111'))
console.log(digitalLibrary.getBookDetails('2222'))
console.log(digitalLibrary.getBookDetails('3333'))