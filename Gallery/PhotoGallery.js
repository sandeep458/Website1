import React from 'react'
import Hangers from'../../Images/Hangers.jpg';
import Liquid from '../../Images/Liquid.jpg';
import Clock from '../../Images/Clock.jpg';
import Plants from '../../Images/Plants.jpg';
import Nature from '../../Images/Nature.jpg';
import Earphones from '../../Images/Earphones.jpg';
import Bus from '../../Images/Bus.jpg';
import City from '../../Images/City.jpg';
import Drawing from '../../Images/Drawing.jpg';
import PlantRise from '../../Images/PlantRise.jpg';
import Flower from "../../Images/Flower.jpg";
import Flavour from '../../Images/Flavour.jpg';
import Boat from '../../Images/Boat.jpg';
import FlowerLighting from '../../Images/FlowerLighting.jpg';
import Turtle from '../../Images/Turtle.jpg';
import Peace from '../../Images/Peace.jpg';
import './PhotoGallery.css';
import Card from "../Card/Card";
function PhotoGallery() {
    return (
        <div>
            <div className="sidebar">
                <h2 className="new-heading">
                    Latest photos
                </h2>
                <form>
                    <p>page</p>
                    <input type="text" class="galleryinput" value="4"></input>
                        <p>
                            "of"
                            "4"
                        </p>
                </form>
            </div>
            
            <div className="new-photo">
            <Card imgsrc = {Turtle} />
            <Card imgsrc = {Hangers} />
            <Card imgsrc = {Liquid} />
            <Card imgsrc = {Clock} />
            <Card imgsrc = {Plants} />
            <Card imgsrc = {Nature} />
            <Card imgsrc = {Earphones} />
            <Card imgsrc = {Bus} />
            <Card imgsrc = {City} />
            <Card imgsrc = {Drawing} />
            <Card imgsrc = {PlantRise} />
            <Card imgsrc = {Flower} />
            <Card imgsrc = {Flavour} />
            <Card imgsrc = {Boat} />
            <Card imgsrc = {FlowerLighting} />
            <Card imgsrc = {Peace} />
            </div>
    </div>
    )
}

export default PhotoGallery
