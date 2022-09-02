import React from "react";

export default function Place (props) {
    return (
        <div className="place">
            <img src={props.item.imageUrl} />
            <div className="content">
                <p class="location">
                    <i class="fa-solid fa-location-dot"></i>
                    <span>{props.item.location}</span>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </p>
                <h1>{props.item.title}</h1>
                <h3 className="dates">
                    {props.item.startDate} - {props.item.endDate}
                </h3>
                <p className="description">
                    {props.item.description}
                </p>
            </div>
        </div>
    )
}