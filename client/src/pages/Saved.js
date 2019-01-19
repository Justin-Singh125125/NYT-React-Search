import React, { Component } from 'react'
import SavedBooks from "../components/SavedBooks/SavedBooks";
import API from "../utils/API";
export default class Saved extends Component {



    componentDidMount() {
        this.handleLoadBooks();
    }


    state = {
        SavedBooks: []
    }

    handleLoadBooks = () => {
        API.getBooks().then(res => {
            this.setState({ SavedBooks: res.data });
        })
    }

    handleRenderingBooks = () => {

        var temp = this.state.SavedBooks.map(b =>
            <SavedBooks key={b.title} handleBookDelete={this.handleBookDelete} id={b._id} title={b.title} image={b.img} publisher={b.publisher} href={b.href} description={b.description} />

        )

        return temp;
    }
    handleBookDelete = (id) => {
        API.deleteBook(id).then(res => {
            this.handleLoadBooks();
        })
    }

    render() {
        return (
            <div>
                {this.handleRenderingBooks()}

            </div>
        )
    }
}
