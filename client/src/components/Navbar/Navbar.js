import React from 'react';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="/">React Search</a>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Search <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/saved">Saved <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}


export default Navbar;