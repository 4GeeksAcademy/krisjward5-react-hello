import React from "react";

export function Navbar(props) {

    const {
        navName1,
        navName2,
        navName3,
        navName4,
        navName5,
        navLink,
    } = props;

    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{navName1}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse rightNavBar" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href={navLink}>{navName2}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={navLink}>{navName3}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={navLink}>{navName4}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={navLink}>{navName5}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}