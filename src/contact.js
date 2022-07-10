


function createContact(content) {

    while (content.firstChild) {
        content.removeChild(content.lastChild)
    }

    window.scrollTo(0, 0);

    content.style.cssText = ""

    let description = document.createElement("p")
    description.classList.add("para")
    description.textContent = "Contact us! We would love to hear from you! Love you <3"
    content.appendChild(description)

    description = document.createElement("p")
    description.classList.add("para-contact")
    description.textContent = "Phone: 80085-4-7143"
    content.appendChild(description)

    description = document.createElement("p")
    description.classList.add("para-contact")
    description.textContent = "Fax: 69-2-420"
    content.appendChild(description)

    description = document.createElement("p")
    description.classList.add("para-contact")
    description.textContent = "Telegraph: 1337-4-HACKS"
    content.appendChild(description)

    description = document.createElement("p")
    description.classList.add("para-contact")
    description.textContent = "Quantum Tunnel: 688787D8FF144C502C7F5CFFAAFE2CC588D86079F9DE88304C26B0CB99CE91C6"
    content.appendChild(description)

    // create footer portion
    let footer = document.createElement("div")
    footer.id = "footer"
    footer.textContent = "This Restaurant is brought to you by a Project assignment from The Odin Project"
    content.appendChild(footer)

}

export { createContact }