import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
    const characterId = getHash();

    const character = await getData({ id: characterId });



    const view = /*html*/ `

<div class="Characters-inner">

    <article class="Character-card">

        <div><h2 class="character-name">${character.name}</h2></div>
        <img src="${character.image}" alt="${character.name}">
        
    </article>
    
    <article class="Character-info">
       <div> <h2>Details</h2> </div>

       <div class="info-container">
            <h3><span>Episodes:</span> <span>${character.episode.length}</span></h3>
            <h3><span>Status:</span> <span>${character.status}</span></h3>
            <h3><span>Species:</span> <span>${character.spacies}</span></h3>
            <h3><span>Gender:</span> <span>${character.gender}</span></h3>
            <h3><span>Origin:</span> <span>${character.origin.name}</span></h3>
            <h3><span>Last location:</span> <span>${character.location.name}</span></h3>
       </div> 
    </article>

    <a href="/">
    <div class="button-principal character-button">
        <h3>BACK</h3>
    </div>
</a>
</div>

`;
    return view

};


export default Character