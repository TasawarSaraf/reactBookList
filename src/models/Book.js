


export default class Task {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id = new Date().getTime();
    }
}