const Header = () => {
    const view = `
    
    
        <div class="Header-logo">
            <h1>
                <a href="/">
                    <img src="https://static.wikia.nocookie.net/rickandmorty/images/f/f4/Rick_and_Morty_Logo_and_Image.png" alt="logo">
                </a>
            </h1>
        </div>
        <div class="Header-navbar">

            <a href="#/search/">
                <img class="search-icon" src="./src/icons/search.svg">
            </a>
                      

        </div>
    
    
    `;
    return view

};


export default Header