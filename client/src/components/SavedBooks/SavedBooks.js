import React from 'react';
import "./SavedBooks.css";

export default function SavedBooks(props) {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    <h2>{props.title}</h2>
                    <div className="text-right">
                        <a href={props.href} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn btn-success">View</button>
                        </a>
                        <button onClick={() => props.handleBookDelete(props.id)} type="button" className="btn btn-danger">Delete</button>
                    </div>
                    <small>Published by {props.publisher}</small>
                </div>


                <div className="card-body">
                    <img className="image" src={props.image} alt={props.title} />
                    <p className="results-text">{props.description}</p>
                </div>

            </div>
        </div>
    )
}
