import getHash from "../utils/getHash";

const Filters = () => {

    const filstesContainer = document.querySelector("#filters")

    const view = `
        <div>
            <p>Dead</p>
            <input type="checkbox" class="checkDead btnFilter"> </input>
        </div>

        <div>
            <p>Alive</p>
            <input type="checkbox" class="checkAlive btnFilter"> </input>
            </div>

        <div>
            <p>Male</p>
            <input type="checkbox" class="checkMale btnFilter"> </input>
            </div>

        <div>
            <p>Female</p>
            <input type="checkbox" class="checkFemale btnFilter"> </input>
            </div>



`;

    filstesContainer.innerHTML = view


    const btnDead = document.querySelector(".checkDead")
    const btnAlive = document.querySelector(".checkAlive")
    const btnMale = document.querySelector(".checkMale")
    const btnFemale = document.querySelector(".checkFemale")


    const botones = document.querySelectorAll(".btnFilter")



    botones.forEach(element => {

        if (element.classList.contains("checkDead")) {

            if (location.hash.includes("&status=dead")) {
                element.checked = true
            }
            element.addEventListener("click", filter("&status=dead", element))

        }

        if (element.classList.contains("checkAlive")) {

            if (location.hash.includes("&status=alive")) {
                element.checked = true
            }

            element.addEventListener("click", filter("&status=alive", element))


        }
        if (element.classList.contains("checkMale")) {

            if (location.hash.includes("&gender=male")) {
                element.checked = true
            }
            element.addEventListener("click", filter("&gender=male", element))


        }
        if (element.classList.contains("checkFemale")) {

            if (location.hash.includes("&gender=female")) {
                element.checked = true
            }

            element.addEventListener("click", filter("&gender=female", element))

        }


    })




    function filter(txt, n) {

        return () => {

            const hash = getHash();

            if (hash === "search") {

                const txtfilter = txt

                const nodo = n

                if (nodo.checked) {

                    if (!location.hash.includes(txtfilter)) {
                        location.hash += txtfilter

                    }


                } else if (location.hash.includes(txtfilter)) {
                    location.hash = location.hash.replace(txtfilter, "")


                }




            }

        }



    }

}







export default Filters