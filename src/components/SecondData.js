import React, {useState, useEffect} from "react";
import SecondCard from "./SecondCard";
import axios from "axios";

function SecondData() {

    const [picture, setPicture] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=fhaz&api_key=dvmxNt3TlmYANKau1J791EZqUHVG8GSnVglwL2ol")
        .then(response => {
            console.log(response);
            setPicture(response.data.photos);
        })
        .catch(error => {
            console.log("No Data was Passed", error);
        })
    }, [])
    
    return (
        picture.map((val, index) => (
            <SecondCard key={index} photo={val.img_src}/>
    ))
    )
}

export default SecondData;