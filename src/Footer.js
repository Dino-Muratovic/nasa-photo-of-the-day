import React from "react";

const Footer = (props) => {
    console.log(`this is props in footer`, props);

    return (
        <div>
            <p>{props.value.date} &copy;{props.value.copyright}</p>   
        </div>
    )

}

export default Footer;