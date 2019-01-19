import React from 'react';
import "./BookResults.css";

export default function BookResults(props) {
    return (
        <div>
            <div className="card">

                <div className="card-header">
                    <h2>{props.title}</h2>
                    <div className="text-right">
                        <a href={props.href} target="_blank">
                            <button type="button" className="btn btn-success">View</button>
                        </a>
                        <button type="button" className="btn btn-info">Save</button>
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
