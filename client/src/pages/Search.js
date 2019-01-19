import React, { Component } from 'react'
import SearchBar from "../components/SearchBar/SearchBar";
import API from "../utils/API";
import BookResults from "../components/BookResults/BookResults";
import Jumbotron from "../components/Jumbotron/Jumbotron";

export default class Search extends Component {


    state = {
        search: "",
        results: [],
        error: "",
        good: false

    };
    handleInputChange = (event) => {

        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    handleBookSearch = () => {
        API.searchBook(this.state.search).then((res) => {
            console.log(res.data);
            this.setState({ results: res.data.items, good: true });
        }).catch(err => this.setState({ error: err }));
    }
    handleRenderingResults = () => {
        if (this.state.results) {
            var newArray = this.state.results.map(b => {
                var { title, publisher, description, canonicalVolumeLink } = b.volumeInfo;
                var image = b.volumeInfo.imageLinks.thumbnail;
                return <BookResults handleSavingBooks={this.handleSavingBooks} href={canonicalVolumeLink} key={title} title={title} publisher={publisher} description={description} image={image} />
            })

            return newArray;
        } else {
            this.handleEmptyResults();
        }

    }
    handleEmptyResults = () => {
        return <div><Jumbotron><h2>No Current Books</h2></Jumbotron></div>

    }
    handleSavingBooks = (title, publisher, img, description, href) => {
        var newBook = {
            title: title,
            publisher: publisher,
            img: img,
            description: description,
            href: href
        };
        API.saveBook(newBook).then(res => {
            console.log("saved")
            console.log(res);
        })
    }
    render() {
        return (
            <div>
                <SearchBar handleBookSearch={this.handleBookSearch} handleInputChange={this.handleInputChange} />
                {!this.state.results.length ? this.handleEmptyResults() : this.handleRenderingResults()}
            </div>
        )
    }
}
