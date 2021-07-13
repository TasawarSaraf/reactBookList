import {Component} from 'react';
import Book from "../models/Book";




export default class TypeBook extends Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            author: '',
            isbn: '',
         };
    }

   
    onAddBook(){
        const book = new Book(this.state.title, this.state.author, this.state.isbn);
        this.setState({title: '', author: '', isbn:''});
        this.props.createBook(book);
    }

    onInputTitleChange(e){
        this.setState({title: e.target.value});
    }

    onInputAuthorChange(e){
        this.setState({author: e.target.value});
    }

    onInputIsbnChange(e){
        this.setState({isbn: e.target.value});
    }




    render() {
        return(
            <div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    <input onChange={(e)=> this.onInputTitleChange(e)} value={this.state.title} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">Author</span>
                    <input onChange={(e)=> this.onInputAuthorChange(e)} value={this.state.author} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-default">ISBN #</span>
                    <input onChange={(e)=> this.onInputIsbnChange(e)} value={this.state.isbn} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={() => this.onAddBook()} className="btn btn-secondary" type="button">Submit</button>    
                </div>

            </div>
        )
    }
}