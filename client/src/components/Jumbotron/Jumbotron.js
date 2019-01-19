import React from 'react'
import "./Jumbotron.css";

export default function Jumbotron(props) {
    return (
        <div className="jumbotron text-center" style={{ margin: "20px" }}>
            {props.children}
        </div>
    )
}
