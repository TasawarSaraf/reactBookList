import {Component} from 'react';
//import Book from '../models/Book';
import {Button, Modal} from 'react-bootstrap';


export default class BookList extends Component{
    constructor(props){
        super(props)

        this.state = {
            show: false,
        }
    }

    onHandleModal(){
        this.setState({show: !this.state.show});
    }
    render(){
        return(
            <div className="mt-3 text-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Author</th>
                            <th scope="col">#ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.books.map(book =>{
                               return <tr key={book.id}>
                               <th scope="row">{book.title}</th>
                               <td>{book.author}</td>
                               <td>{book.isbn}</td>
                               <td>
                               <Button onClick={()=> this.onHandleModal()} variant="warning"> <i className="bi bi-pencil"></i></Button>{' '}
                               </td>
                               <td>
                                   <button onClick={() => this.props.bookRemoved(book.id)} className="btn btn-danger">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                        </svg>
                                   </button>
                               </td>
                           </tr>
                            })
                         }    
                    </tbody>
                </table>

                {/* <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
               
                </div> */}
                <Modal show={this.state.show} >
                    <Modal.header>
                        <Modal.title>Edit Your Book.</Modal.title>

                    </Modal.header>
                    <Modal.body>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Author</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">ISBN</span>
                            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                        </div>
                    </Modal.body>
                    <Modal.footer>
                        <Button onClick={()=> this.onHandleModal()} variant="secondary" >
                            Close
                        </Button>
                        <Button variant="success" >
                            Save
                        </Button>
                    </Modal.footer>
                </Modal>







            </div>
        )
    }
}