

function createMenu(content) {

    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    window.scrollTo(0, 0);

    let description = document.createElement("p")
    description.classList.add("para")
    description.textContent = "Our menu is so good  you wont believe it! Well believe IT!"
    content.appendChild(description)

    let uList = document.createElement("ul")
    uList.id = "menu-list"
    content.appendChild(uList)
    //First item
    let listItem = document.createElement("li")
    let itemContent = document.createElement("p")
    itemContent.textContent = "Mega burger WOW edition!"
    listItem.appendChild(itemContent)
    itemContent = document.createElement("p")
    itemContent.textContent = "This is the ultimate Big Big BIg burger. Juicy big and delicious, your jaw size does not matter you WILL use a knife to cut down this beast before you eat it, unless you are... never mind. This borgar is sure to make you fill full, satisfied, and filled to the brim with the intricate taste of a good burger through the entire time you are eating it! Truly divine burgar!"
    listItem.appendChild(itemContent)
    uList.appendChild(listItem)

    let imageChild = document.createElement("img")
    imageChild.src = "img/bargur.jpg"
    imageChild.alt = "art"
    listItem.appendChild(imageChild)

    //Second item
    listItem = document.createElement("li")
    itemContent = document.createElement("p")
    itemContent.textContent = "Big Spaget!"
    listItem.appendChild(itemContent)
    itemContent = document.createElement("p")
    itemContent.textContent = "The big spaget challenge, this dish has defeated countless opponents, Its would be predators all lay defeated before its mighty size. Will you take on this momentous challenge and surpass those that came before you and defeat this huge beast?!"
    listItem.appendChild(itemContent)
    uList.appendChild(listItem)

    imageChild = document.createElement("img")
    imageChild.src = "img/spaget.jpg"
    imageChild.alt = "art"
    listItem.appendChild(imageChild)

    //Third item
    listItem = document.createElement("li")
    itemContent = document.createElement("p")
    itemContent.textContent = "The tough Steak Stallion!"
    listItem.appendChild(itemContent)
    itemContent = document.createElement("p")
    itemContent.textContent = "The tough steak stallion is truly a supreme specimen of unbridled will of a once imense bull! Don't let it fool you its size may be large but its filled to the brim with enough energy to blow you down by your second bite. Do not take this lightly, you will fall!"
    listItem.appendChild(itemContent)
    uList.appendChild(listItem)

    imageChild = document.createElement("img")
    imageChild.src = "img/steak.jpg"
    imageChild.alt = "art"
    listItem.appendChild(imageChild)

    // create footer portion
    let footer = document.createElement("div")
    footer.id = "footer"
    footer.textContent = "This Restaurant is brought to you by a Project assignment from The Odin Project"
    content.appendChild(footer)

}


export {createMenu}
