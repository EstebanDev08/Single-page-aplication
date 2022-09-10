import getHash from "../utils/getHash";

const Header = () => {

    const header = document.getElementById("header");

    header.innerHTML = "";

    const view = `


<div class="Header-logo">
    <h1>
        <a href="/">
            <img src="https://static.wikia.nocookie.net/rickandmorty/images/f/f4/Rick_and_Morty_Logo_and_Image.png"
                alt="logo">
        </a>
    </h1>
</div>
<div class="Header-navbar">

    <div action="" class="formSearch">

        <a>
        <img class="search-icon btnSearch" src="./src/icons/search.svg">
        </a>

        <input class="inpSearch inactive" type="text">


    </div>

</div>


`;


    header.innerHTML = view;

    const btnSearch = document.querySelector(".btnSearch")

    btnSearch.addEventListener("click", search)



};




function search() {

    const inpSearch = document.querySelector(".inpSearch");

    inpSearch.style.width = ""

    if (inpSearch.classList.contains("inactive")) {
        inpSearch.classList.remove("inactive")


    } else {


        const txtBusqueda = inpSearch.value

        if (inpSearch.value !== "") {

            const containerSearch = document.querySelector("#contentSearch")
            containerSearch.innerHTML = "";

            location.hash = `#/search/${txtBusqueda}`

            inpSearch.classList.add("inactive")



        } else {

            inpSearch.classList.add("inactive")
        }

    }

}







export default Header