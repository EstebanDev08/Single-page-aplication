import getData from "./getData"


let nPage = 1;

let activeInfiniteScroll = true;


async function addPages(nodoHtml, { id, param }) {



    const totalPages = await getData({ id: id, prm: param }).then(result => { return result.info.pages });


    if (nPage < totalPages && activeInfiniteScroll) {



        nPage++;



        const characters = await getData({ prm: `page=${nPage}&${param}`, id: id });

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

        nodoHtml.innerHTML += page


        //como ya renderizamos desacticamos el scroll infinito
        activeInfiniteScroll = false;

    }

    // activamos el scroll luego d eunos segundos para dar tiempo a que cargue la info
    setTimeout(() => {
        activeInfiniteScroll = true;
    }, 500);


}

export default addPages