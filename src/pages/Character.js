import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Character = async () => {
    const characterId = getHash();

    const character = await getData({ id: characterId });



    const view = /*html*/ `

<div class="Characters-innner">
    <article class="Characters-card">
        <img src="${character.image}" alt="${character.name}">
        <h2>${character.name}</h2>
    </article>
    <article class="Characters-card">
        <h3>episodes: ${character.episode.length}</h3>
        <h3>status: ${character.status}</h3>
        <h3>Species: ${character.spacies}</h3>
        <h3>Gender: ${character.gender}</h3>
        <h3>Origin: ${character.origin.name}</h3>
        <h3>Last location: ${character.location.name}</h3>
    </article>
</div>

`;
    return view

};


export default Character