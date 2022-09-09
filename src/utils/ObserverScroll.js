import addPages from "./addPages";
import getHash from "./getHash";
import { getHashSearch } from "../pages/Search";

function observerScroll() {

    return async () => {

        if ((window.scrollY + window.innerHeight) >= (document.documentElement.scrollHeight)) {

            if (location.hash === "") {

                const container = document.querySelector("#character")

                await addPages(container, {});
            } else if (getHash() === "search") {

                const txtSearch = getHashSearch();


                const container = document.querySelector("#contentSearch")

                await addPages(container, { param: `name=${txtSearch}` });

            }

            else {
                console.log("no es el home")
            }

        }

    }

}

export default observerScroll