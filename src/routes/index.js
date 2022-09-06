import Header from '../tamplate/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'


const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'contact'

};

const router = async () => {
    const header = null || document.getElementById("header");
    const content = null || document.getElementById("content")
    const character = null || document.getElementById("character")

    header.innerHTML = await Header();

    let hash = getHash();
    let route = await resolveRoutes(hash);



    let render = routes[route] ? routes[route] : Error404;

    console.log(hash)




    console.log(character)


    if (route === "/") {
        content.innerHTML = `<div class="Characters" id="character"></div>`
        character.innerHTML = await render();

    } else {
        content.innerHTML = await render();

    }



};

export default router