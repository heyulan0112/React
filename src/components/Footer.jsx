import React from "react";

function Footer(){
    const curr = new Date().getFullYear();
    return <footer>
    <p>©️{curr} Yulan He @The Jas Note. All Rights Reserved.</p>
    </footer>;
}

export default Footer;