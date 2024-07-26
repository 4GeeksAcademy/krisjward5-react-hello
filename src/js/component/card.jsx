import React from 'react';

export function Card(props) {

    const {
        imageUrl,
        imageAltText,
        cardTitle,
        cardBodyText,
        callToActionText,
        callToActionUrl
    } = props;


    return (
        <div className="card"
            style={{
                width: '18rem'
            }}
        >
            <img className="card-img-top" src={imageUrl} alt={imageAltText} />
            <div className="card-body">
                <h5 className="card-title">{cardTitle}</h5>
                <p className="card-text">{cardBodyText}</p>
                <a href={callToActionUrl} class="btn btn-primary">{callToActionText}</a>
            </div>
        </div>
    )
}