
function createContainer() {

    

    let container = document.createElement("div")
    container.id = "container"
    document.body.appendChild(container)

    //create Header portion
    let header = document.createElement("div")
    header.id = "header"
    container.appendChild(header)


    let landingPage = document.createElement("div")
    landingPage.id = "landing-page"
    landingPage.classList.add("header-items")
    landingPage.textContent = "Landing Page"
    header.appendChild(landingPage)

    let menu = document.createElement("div")
    menu.id = "menu"
    menu.classList.add("header-items")
    menu.textContent = "Menu"
    header.appendChild(menu)

    let contact = document.createElement("div")
    contact.id = "contact"
    contact.classList.add("header-items")
    contact.textContent = "Contact"
    header.appendChild(contact)

    //Create Content portion
    let content = document.createElement("div")
    content.id = "content"
    let imageChild = document.createElement("img")
    imageChild.src = "img/Inamae Ina'nises OWN ART.jpg"
    imageChild.alt = "art"
    content.appendChild(imageChild)
    container.appendChild(content)


    // create footer portion
    let footer = document.createElement("div")
    footer.id = "footer"
    footer.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni non sunt saepe necessitatibus labore, alias quidem accusamus incidunt nulla sit praesentium dicta ad ab vero cum reiciendis beatae omnis!"
    content.appendChild(footer)

    document.body.appendChild(container)



    console.log("Hit! from createSite.js")

}

export {createContainer};

{/* <div id="container">

<div id="header">
    Restaurant Header

    <div id="landing-page">
        <img src="img/Inamae Ina'nises OWN ART.jpg" alt="art">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque magni non sunt saepe necessitatibus labore, alias quidem accusamus incidunt nulla sit praesentium dicta ad ab vero cum reiciendis beatae omnis!</p>
    </div>
    <div id="menu">
        <img src="img/Inamae Ina'nises OWN ART.jpg" alt="art">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique deserunt, nostrum repellat odio, voluptate sint, enim sequi quaerat facere aperiam alias veritatis molestias sapiente aspernatur nihil obcaecati? Dolor, quo tempora?</p>
    </div>
    <div id="contact">
        <img src="img/Inamae Ina'nises OWN ART.jpg" alt="art">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos cumque nemo minus architecto fugit doloremque beatae non est! Et itaque ipsam ipsa laborum, explicabo tempora! Dolor quibusdam minus vitae molestias?
        </p>
    </div>
</div>
</div> */}