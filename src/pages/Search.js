import getData from "../utils/getData";


const Search = async () => {

    const txtBusqueda = getHashSearch();

    const searchContainer = document.getElementById("contentSearch")

    if (searchContainer.innerHTML === "") {



        try {

            const characters = await getData({ prm: `name=${txtBusqueda}` });

            console.log(characters)

            let page = `
            
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                         <div>   <h2>${character.name}</h2> </div>
                    </a>
                </article>
                `).join('')}
            
            `;

            searchContainer.innerHTML = page

        } catch (error) {

            location.hash = "#/error404/"

        }



    }

};


function getHashSearch() {
    const hash = location.hash

    const txtBusqueda = hash.split("/")[2]


    return txtBusqueda

}


export { Search, getHashSearch }