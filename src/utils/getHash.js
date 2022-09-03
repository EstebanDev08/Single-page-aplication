const getHash = () => location.hash
    .split('/')
    .slice(1)[0]
    .toLocaleLowerCase() || '/';


export default getHash