const API = 'https://rickandmortyapi.com/api/character/'


async function getData({ id = '', prm = '' }) {
    try {
        const response = await fetch(`${API}${id}?${prm}`)
        const data = await response.json();
        return data;
    } catch (error) {

        console.log(error);

    }

}

export default getData