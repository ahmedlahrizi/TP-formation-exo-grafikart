"use strict";

let moreButton = document.getElementsByClassName("close");

console.log(moreButton);


moreButton.forEach(item => item.addEventListener("click", toggleSideBar));

console.log("Added event Listener")

function toggleSideBar(event) {
    let links = document.getElementsByTagName("aside");

    console.log(links);

    event.preventDefault();

    let linksDisplay = links.style.display;

    console.log(linksDisplay)

    if (linksDisplay === "none") {

        linksDisplay = "block";

        console.log("Appeared");
        return;
    }

    links.style.display = "none";

    console.log("Disapeared");
}