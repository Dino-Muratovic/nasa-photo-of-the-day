import React, {useState, useEffect} from "react";
import axios from "axios";
import NasaContainer from "./NasaContainer";
import Footer from "./Footer";

const Body = () => {
//set the state

const [data, dataUpdater] = useState({});
    

  useEffect (() => {
    axios
    .get ('https://api.nasa.gov/planetary/apod?api_key=tmidPAvhxfCkLXtsdRCpsTjUrRsxN0W7qWCw0fmh')
    .then (response => {
        console.log(`This is response inside body`, response);
        console.log(`this is data inside body `, response.data);
        dataUpdater(response.data); // drilled to where I needed to be see line 32
    })
    .catch (error => {
        console.log(`Oops there was an error`, error)
    })
  }, []); // dependancy array here -- IMPORTANT

  
    
    
    


    return (
        <div className="bodyContainer">
            {/* some buttons or other content may go here */}
            
            <p>{data.explanation}</p>
                <NasaContainer value={data} />
                <button>Button1</button>
                <Footer value={data}/>                   
            </div> // this closes bodyContainer
    )
}

export default Body;