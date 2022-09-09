const Header = () => {

    const header = document.getElementById("header");

    header.innerHTML = "";

    const view = `
    
    
        <div class="Header-logo">
            <h1>
                <a href="/">
                    <img src="https://static.wikia.nocookie.net/rickandmorty/images/f/f4/Rick_and_Morty_Logo_and_Image.png" alt="logo">
                </a>
            </h1>
        </div>
        <div class="Header-navbar">
            
            <div action="" class="formSearch">
                <input  class="inpSearch inactive" type="text">
                <a >
                <img class="search-icon btnSearch" src="./src/icons/search.svg">
                </a>
            </div>                 

        </div>
    
    
    `;


    header.innerHTML = view;

    const btnSearch = document.querySelector(".btnSearch")

    btnSearch.addEventListener("click", search)




};



function search() {

    const inpSearch = document.querySelector(".inpSearch");



    if (inpSearch.classList.contains("inactive")) {
        inpSearch.classList.remove("inactive")
    } else {

        const container = document.querySelector("#contentSearch")

        const txtBusqueda = inpSearch.value

        if (inpSearch.value !== "") {
            location.hash = `#/search/${txtBusqueda}`

            inpSearch.classList.add("inactive")

            container.innerHTML = "";
        } else {

            inpSearch.classList.add("inactive")
        }

    }


}



export default Header