import React from "react";

export function Hero(props) {

    const {
        heroTitle,
        heroMainText,
        heroButton,
        heroButtonLink
    } = props;

    return (
        <div className="heroCard">
            <div className="card heroBoxCard bg-secondary">
                <h1 className="heroTitle">{heroTitle}</h1>
                <p className="delver">{heroMainText}</p>
                <div className="d-flex justify-content-start">
                    <a className="btn btn-primary delverButton" href={heroButtonLink} type="button">{heroButton}</a>
                </div>
            </div>
        </div>
    )
}