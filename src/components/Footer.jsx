import React from "react";

function Footer(){
    const curr = new Date().getFullYear();
    return <footer>
    <h1>Copyright @ {curr}</h1>
    </footer>;
}

export default Footer;