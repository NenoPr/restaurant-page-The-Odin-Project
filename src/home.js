import { createLocation } from './location'
import { createMenu } from './menu'
import { currentPage } from './index'

function createHomepage(content, currentPage) {


    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    window.scrollTo(0, 0);

    let description = document.createElement("p")
    description.id = "home-description"
    description.textContent = "We serve food. The good kind. Come. You will love it. Pinky swear!"
    content.appendChild(description)

    description = document.createElement("p")
    description.id = "home-why"
    description.innerHTML = "The food here is so good the mothers hate it! Our food is so much better than theirs that their kids just want to eat our food! And not theirs! <b>They feel defeated!</b> And all our chefs are handsome to boot!"
    content.appendChild(description)

    let background = document.createElement("div")
    background.classList.add("home-menu-background-chef")
    content.appendChild(background)


    let imageChild = document.createElement("img")
    imageChild.src = "img/happy-chef.jpg"
    imageChild.alt = "art"
    background.appendChild(imageChild)

    description = document.createElement("p")
    description.id = "home-why"
    description.innerHTML = "But don't worry if you are a mother! No no no, trust us, you wont have any problems because you know.. you are just on a whole new level compared to the other moms! You can rest easy haha. In fact, wanna work here?"
    content.appendChild(description)

    imageChild = document.createElement("img")
    imageChild.id = "big-restaurant-img"
    imageChild.src = "img/restaurant.jpg"
    imageChild.alt = "art"
    content.appendChild(imageChild)
    

    background = document.createElement("div")
    background.classList.add("home-menu-background")
    background.style.cssText = "background-image: url(/dist/img/header_img.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;"
    content.appendChild(background)
    let backgroundHolder = document.createElement("div")
    backgroundHolder.classList.add("home-menu-background-holder")
    background.appendChild(backgroundHolder)

    description = document.createElement("p")
    description.classList.add("home-menu-call")
    description.innerHTML = "Our place is so big you can call your entire family and their entire family thrice over and there would still be half the restaurant left for other guests, its that Big! Very Big! <br> Come and see it for yourself!"
    backgroundHolder.appendChild(description)

    let image = document.createElement("div")
    image.classList.add("home-menu-button")
    image.textContent = "Scope out our Location!"
    image.addEventListener("click", () => {
        currentPage = "Location"
        createLocation(content);
    })
    backgroundHolder.appendChild(image)

    background = document.createElement("div")
    background.classList.add("home-menu-background")
    background.style.cssText = "background-image: url(/dist/img/header.jpg); background-size:  cover;background-repeat: no-repeat;background-position: center;"
    content.appendChild(background)

    backgroundHolder = document.createElement("div")
    backgroundHolder.id = "home-menu-background-holder-2"
    background.appendChild(backgroundHolder)
    description = document.createElement("p")
    description.classList.add("home-menu-call")
    description.innerHTML = "Our food will pierce your happiness levels through the roof! Healthy food, big food, fried food everything is specialized per our chefs.<br> Just check our Menu and see what we are made of at this restaurant!"
    backgroundHolder.appendChild(description)

    image = document.createElement("div")
    image.classList.add("home-menu-button")
    image.textContent = "Check out our Menu!"
    image.addEventListener("click", () => {
        currentPage = "Menu"
        createMenu(content);
    })
    backgroundHolder.appendChild(image)

    // create footer portion
    let footer = document.createElement("div")
    footer.id = "footer"
    footer.textContent = "This Restaurant is brought to you by a Project assignment from The Odin Project"
    content.appendChild(footer)

    // document.body.appendChild(container)
}

export {createHomepage}