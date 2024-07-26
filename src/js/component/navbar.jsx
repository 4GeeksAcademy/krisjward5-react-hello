import React from "react";

export function Navbar(props) {

    const {
        navTitle,
        navLinks,
    } = props;

    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">{navTitle}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse rightNavBar" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {navLinks.map((navLink) =>(
                                <li className="nav-item">
                                <a className="nav-link" aria-current="page" href={navLink.navurl}>{navLink.navlabel}</a>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}