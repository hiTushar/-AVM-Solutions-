import React from "react";
import Card from "./Card";
import logo from "../ui_design_resources/logo.svg";

export default function Dashboard() {
    return (
        <div className="dashboard">
            <div className="logo">
                <img src={logo}/>
            </div>
            <div className="cards">
                <Card type="Air Quality"/>
                <Card type="Temperature"/>
                <Card type="Audio"/>
                <Card type="Displays"/>
                <Card type="Lighting"/>
            </div>
        </div>
    )
}
