

const resolveRoutes = (route) => {

    let validRoute;
    if (route === '/') {

        validRoute = "/home";
    }
    else if (route >= 0) {

        validRoute = '/:id';

    } else if (route === "search") {

        validRoute = '/search';

    }

    return validRoute






}

export default resolveRoutes