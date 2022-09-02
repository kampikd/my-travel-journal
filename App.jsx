import React from "react";
import Navbar from "./components/Navbar";
import Place from "./components/Place";
import data from "./data";

export default function App () {
    let places = data.map(place => (
        <Place key={place.title} item={place} />
    ))
    
    return (
        <>
            <Navbar />
            {places}
        </>
    )
}