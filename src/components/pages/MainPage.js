import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../../BooksAPI';


import Shelf from '../Shelf';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    
    componentDidmount() {
        BooksAPI.getAll()
        .then(response => {
            console.log(response);
            this.setState({books: response});
        });
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf name="Currently Reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")} />
                        <Shelf name="Want to Read" books={this.state.books.filter(b => b.shelf === "wantToRead")} />
                        <Shelf name="Read" books={this.state.books.filter(b => b.shelf === "read")} />
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/search">Add a book</Link>
                </div>
            </div>
        )
    }
}   

export default MainPage;