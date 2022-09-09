import getData from "../utils/getData";
import addPages from "../utils/addPages";




const Home = async () => {


    const charactersContainer = document.getElementById("character")

    if (charactersContainer.innerHTML === "") {


        const characters = await getData({ prm: `page=1}` });

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

        charactersContainer.innerHTML = page

    }



};



export default Home 
