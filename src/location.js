


function createLocation(content) {

    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    window.scrollTo(0, 0);

    content.style.cssText = ""

    let description = document.createElement("p")
    description.classList.add("para")
    description.textContent = "Come find us now! Or we will find you hahah lol... unless"
    content.appendChild(description)

    let imageChild = document.createElement("img")
    imageChild.id = "location-image"
    imageChild.src = "img/mario.jpg"
    imageChild.alt = "art"
    content.appendChild(imageChild)

    // create footer portion
    let footer = document.createElement("div")
    footer.id = "footer"
    footer.textContent = "This Restaurant is brought to you by a Project assignment from The Odin Project"
    content.appendChild(footer)
}

export {createLocation}