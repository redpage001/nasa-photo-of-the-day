import React, {useState, useEffect} from "react";
import NasaCard from "./NasaCard";
import axios from "axios";

function NasaData() {

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response);
            setPhoto(response.data.url)
        })
        .catch(error => {
            console.log("No Data was Passed", error);
        })
    }, [])
    
    return (
        <div className="container">
            <NasaCard url={photo}/>
        </div>
    )
}

export default NasaData;