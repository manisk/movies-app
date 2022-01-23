import React from "react";


function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="/admin">Movies Admin</a>
                    <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a  className="nav-link active text-white" aria-current="page" href="/home">Home</a>
                            </li>
                        </ul>
                        <span className="navbar-text text-white">
                            <b> Welcome Manish</b> <button className="btn btn-outline-danger mx-3">Logout</button>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header;