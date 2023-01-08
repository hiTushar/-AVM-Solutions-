import React, { useCallback } from "react";
import AirQuality from "./AirQuality";
import Audio from "./Audio";
import Displays from "./Displays";
import Lighting from "./Lighting";
import Temperature from "./Temperature";

export default function Card(props) {
    const { type } = props;
    const renderCard = useCallback(() => {
        switch(type) {
            case "Air Quality":
                return <AirQuality />
            case "Temperature":
                return <Temperature />
            case "Audio":
                return <Audio />
            case "Displays":
                return <Displays />
            case "Lighting":
                return <Lighting />
            default: 
                return null
        }
    })
    return (
        <div className="card">
            <span>{type}</span>
            {
                renderCard()
            }
        </div>
    )
}
