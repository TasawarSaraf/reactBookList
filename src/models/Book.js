
export default class Book {
    
    static fromDocument(doc){
        const book = new Book('','','');
        const data = doc.data()
        book.id = doc.id;
        book.name = data.name;
        book.author = data.author;
        book.isbn = data.isbn;

        return book;
        
    }
    
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id = null;
    }
}