import {createHomepage} from './home'
import { createMenu } from './menu'
import { createLocation } from './location'
import { createContact } from './contact'
import './stylesheet.css'


    let container = document.createElement("div")
    container.id = "container"
    document.body.appendChild(container)

    //create Header portion
    let header = document.createElement("div")
    header.id = "header"
    container.appendChild(header)
    header.style.cssText = "background-image: url(/dist/img/header_image.jpg); background-size:  cover; background-repeat: no-repeat; background-position: center;"


    let landingPage = document.createElement("div")
    landingPage.id = "landing-page"
    landingPage.classList.add("header-items")
    landingPage.textContent = "Home"
    header.appendChild(landingPage)

    let menu = document.createElement("div")
    menu.id = "menu"
    menu.classList.add("header-items")
    menu.textContent = "Menu"
    header.appendChild(menu)

    let location = document.createElement("div")
    location.id = "location"
    location.classList.add("header-items")
    location.textContent = "Location"
    header.appendChild(location)

    let contact = document.createElement("div")
    contact.id = "contact"
    contact.classList.add("header-items")
    contact.textContent = "Contact"
    header.appendChild(contact)

    let content = document.createElement("div")
    content.id = "content"
    container.appendChild(content)

    createHomepage(content)

    let currentPage;

landingPage.addEventListener("click", () => {
    if (currentPage != "Home") {
        createHomepage(content, currentPage);
        currentPage = "Home"; 
    }
})

menu.addEventListener("click", () => {
    if (currentPage != "Menu") {
        createMenu(content);
        currentPage = "Menu"; 
    }
})

location.addEventListener("click", () => {
    if (currentPage != "Location") {
        createLocation(content);
        currentPage = "Location"; 
    }
})

contact.addEventListener("click", () => {
    if (currentPage != "Contact") {
        createContact(content);
        currentPage = "Contact"; 
    }
})

export { currentPage }
