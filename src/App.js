import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import firebase from './firebase/firebase';
import './App.css';
import {Component} from 'react';
import TypeBook from "./components/TypeBook";
import BookList from "./components/BookList";
import Book from "./models/Book";
class App extends Component {

  constructor(props){
    super(props)

    this.db = firebase.firestore();
    // let booksString = localStorage.getItem('books')
    // booksString = booksString ? booksString : '[]';
    // const books = JSON.parse(booksString);
    
    this.state = {
      books: [],

    }
  }

 componentDidMount(){
    this.fetchBooks();
    
  }


  async fetchBooks(){
    try{
      const snapShot = await this.db.collection('books').get();
      const books = snapShot.docs.map(doc => Book.fromDocument(doc));
      this.setState({books: books});
    } catch(err){
      console.log(err);
    }
  }

  async onBookCreated(book){

    try{
       console.log(book);
      const docRef = this.db.collection('books').doc();
      await docRef.set({
        title: book.title,
        author: book.author,
        isbn: book.isbn
      });
      book.id = docRef.id;
      this.state.books.push(book);
      this.setState({books: this.state.books});
    }catch (err) {
      console.log(err);
    }
   
  }


  async onBookRemoved(bookID){

      try{
        const docRef = this.db.collection('books').doc(bookID);
        await docRef.delete();
        const updatedBookArr = this.state.books.filter(book => book.id !== bookID);
        this.setState({books: updatedBookArr});
      } catch(err){
        console.log(err);
      }
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
