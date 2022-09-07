import getData from "../utils/getData";


let nPage = 0;

let activeInfiniteScroll = true;



const Home = async () => {

    nPage = 0;

    addPages(nPage, activeInfiniteScroll);

};


function observerScroll() {

    return async () => {

        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight)) {

            if (location.hash === "") {

                await addPages();
            } else {
                console.log("no es el home")
            }

        }

    }

}

async function addPages() {



    const totalPages = await getData({}).then(result => { return result.info.pages });


    if (nPage <= totalPages && activeInfiniteScroll) {


        const character = document.getElementById("character")


        nPage++;



        const characters = await getData({ prm: `page=${nPage}` });

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

        //captura eeror en caso de que no se pueda renderizar 
        //si no estamos en el home character no exixte
        try {
            character.innerHTML += page

            console.log("se agrego page")


        } catch (error) {
            console.log("no estamos en home")
        }

        //como ya renderizamos desacticamos el scroll infinito
        activeInfiniteScroll = false;

    }

    // activamos el scroll luego d eunos segundos para dar tiempo a que cargue la info
    setTimeout(() => {
        activeInfiniteScroll = true;
    }, 500);


}



export { Home, observerScroll }
