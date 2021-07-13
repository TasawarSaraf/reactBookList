import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import './App.css';
import {Component} from 'react';
import TypeBook from "./components/TypeBook";
import BookList from "./components/BookList";
class App extends Component {

  constructor(props){
    super(props)

    let booksString = localStorage.getItem('books')
    booksString = booksString ? booksString : '[]';
    const books = JSON.parse(booksString);
    
    this.state = {
      books: [],

    }
  }

  saveBooksState(books){
    this.setState({
      books: books
    })
    localStorage.setItem('books', JSON.stringify(books))
  }

  onBookCreated(book){
    this.state.books.push(book);
    this.saveBooksState(this.state.books)
  }


  onBookRemoved(bookID){
      const updatedBookArr = this.state.books.filter(book => book.id !== bookID);
      this.saveBooksState(updatedBookArr);
  }

  render(){
    return (
      <div className="container card mt-4 p-4 ">
        <div>
            <h1 className="pb-4"> 
              Add Book:   
            </h1>
            <TypeBook createBook = {(book) => this.onBookCreated(book)}/>
            <BookList books  = {this.state.books} 
            bookRemoved = {(bookID) => this.onBookRemoved(bookID) }/>
        </div>
        
      </div>
    );
  }
  
}

export default App;
