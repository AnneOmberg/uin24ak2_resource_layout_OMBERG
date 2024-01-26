
//Området knappene blit plassert
const headerList = document.getElementById("header-list")

//For at ingen av knappene skal være `active` når siden lastes opp
let currActiveButton = null
//Funksjon for å lage knappene og veksle mellom dem
resources.forEach(resource => {
    
    // Opprette liste-elementet 
    const li = document.createElement("li");
    
    // Opprette buttons
    const button = document.createElement("button")
    button.innerHTML = `${resource.category}`

    // Implementer knappene til list-elementet
    li.appendChild(button)

    // Implementere lista til  #container
    headerList.appendChild(li)

    // Veksle knappene
    button.addEventListener('click', function() {
        if (currActiveButton) {
            currActiveButton.classList.toggle('active')
        }
        button.classList.toggle('active')

        // Oppdatere active button 
        currActiveButton = button             
    })

})

let info = ""

resources.map(content => {info = 
    `<article>
        <h2>${content.category}</h2>
        <p id="text">${content.text}</p>
        <ul>`
            //For å liste opp alle de forskjellige linkene
        content.sources.forEach(source => {
            info += `<li><a href="${source.url}">${source.title}</a></li>`
        })
            
        info = `</ul></article>`
})


const main = document.getElementsByTagName("main")
main[0].innerHTML = info

headerList.addEventListener('click', function(event) {
    if (event.target.tagName === 'BUTTON') {
        main.innerHTML = '';

        //Hente kategorien som ble trykket på
        const clickedCategory = event.target.textContent.trim();

        // Finne det innholdet som går under samme kategori
        const clickedResource = resources.find(resource => resource.category === clickedCategory);

        if (clickedResource) {
            main[0].innerHTML = `
                <article>
                    <h2>${clickedResource.category}</h2>
                    <p id="text">${clickedResource.text}</p>
                    <ul>
                        ${clickedResource.sources.map(source => `<li><a href="${source.url}">${source.title}</a></li>`).join('')}
                    </ul>
                </article>
            `;
        }
    }

    
})