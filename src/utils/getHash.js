const getHash = () => {


    if (location.hash !== '') {


        return location.hash
            .split('/')
            .slice(1)[0]
            .toLocaleLowerCase();


    } else {
        return "/";
    }

}

export default getHash