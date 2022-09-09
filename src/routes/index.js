import Header from '../tamplate/Header'
import Home from '../pages/Home'
import Character from '../pages/Character'
import Error404 from '../pages/Error404'
import getHash from '../utils/getHash'
import resolveRoutes from '../utils/resolveRoutes'
import { Search } from '../pages/Search'


const router = async () => {




    const content = null || document.getElementById("content")
    const characterContent = null || document.getElementById("character")
    const characterCard = null || document.querySelector(".Characters-inner")
    const error404page = null || document.querySelector(".error404-content")
    const searchContent = null || document.getElementById("contentSearch")


    await Header();


    let hash = getHash();
    let route = await resolveRoutes(hash);



    if (route === "/home") {

        error404page ? error404page.remove() : console.log();
        characterContent ? characterContent.classList.remove("inactive") : console.log("")
        characterCard ? characterCard.remove() : console.log()


        searchContent ? searchContent.classList.add("inactive") : console.log("")


        await Home();


    } else if (route === "/:id") {
        characterContent ? characterContent.classList.add("inactive") : console.log("")
        error404page ? error404page.remove() : console.log();

        searchContent ? searchContent.classList.add("inactive") : console.log("")


        content.innerHTML += await Character();


    } else if (route === "/search") {

        error404page ? error404page.remove() : console.log();
        characterContent ? characterContent.classList.add("inactive") : console.log("")
        characterCard ? characterCard.remove() : console.log()

        searchContent ? searchContent.classList.remove("inactive") : console.log("")


        Search();

    } else {

        characterContent ? characterContent.classList.add("inactive") : console.log("")
        characterCard ? characterCard.remove() : console.log()

        searchContent ? searchContent.classList.add("inactive") : console.log("")


        content.innerHTML += await Error404();


    }


};

export default router