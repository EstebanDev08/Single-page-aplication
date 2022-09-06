import getData from "../utils/getData";



const Home = async () => {
    //constantes necesarias para render infinite scroll
    let nPage = 0;
    let activeInfiniteScroll = true;
    const totalPages = await getData({}).then(result => { return result.info.pages });

    //observer al footer para hacer render
    const footer = document.querySelector('footer');
    const observer = new IntersectionObserver(handle)
    observer.observe(footer);

    //funcion donde se aloja la informacion del observer
    function handle(entries) {
        const entry = entries[0];
        const visible = entry.isIntersecting;

        if (visible) {
            addPages();
        }

    };


    //renderizamos una pagna en caso de que el footer sea visible
    //la primer carga siempre estara visible el footer entonces carga la pagina 1
    async function addPages() {


        if (nPage <= totalPages && activeInfiniteScroll) {

            nPage++;

            const character = document.getElementById("character")

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



};


export default Home
