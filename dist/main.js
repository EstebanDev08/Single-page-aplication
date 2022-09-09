(()=>{"use strict";function n(){const n=document.querySelector(".inpSearch");if(n.classList.contains("inactive"))n.classList.remove("inactive");else{const e=document.querySelector("#contentSearch"),a=n.value;""!==n.value?(location.hash=`#/search/${a}`,n.classList.add("inactive"),e.innerHTML=""):n.classList.add("inactive")}}const e=async function({id:n="",prm:e=""}){try{const a=await fetch(`https://rickandmortyapi.com/api/character/${n}?${e}`);return await a.json()}catch(n){console.log(n)}},a=()=>""!==location.hash?location.hash.split("/").slice(1)[0].toLocaleLowerCase():"/";function t(){return location.hash.split("/")[2]}const c=async()=>{const c=document.getElementById("content"),s=document.getElementById("character"),i=document.querySelector(".Characters-inner"),o=document.querySelector(".error404-content"),r=document.getElementById("contentSearch");await(()=>{const e=document.getElementById("header");e.innerHTML="",e.innerHTML='\n    \n    \n        <div class="Header-logo">\n            <h1>\n                <a href="/">\n                    <img src="https://static.wikia.nocookie.net/rickandmorty/images/f/f4/Rick_and_Morty_Logo_and_Image.png" alt="logo">\n                </a>\n            </h1>\n        </div>\n        <div class="Header-navbar">\n            \n            <div action="" class="formSearch">\n                <input  class="inpSearch inactive" type="text">\n                <a >\n                <img class="search-icon btnSearch" src="./src/icons/search.svg">\n                </a>\n            </div>                 \n\n        </div>\n    \n    \n    ',document.querySelector(".btnSearch").addEventListener("click",n)})();let l=a(),d=await(n=>{let e;return"/"===n?e="/home":n>=0?e="/:id":"search"===n&&(e="/search"),e})(l);"/home"===d?(o?o.remove():console.log(),s?s.classList.remove("inactive"):console.log(""),i?i.remove():console.log(),r?r.classList.add("inactive"):console.log(""),await(async()=>{const n=document.getElementById("character");if(""===n.innerHTML){let a=`\n        \n        ${(await e({prm:"page=1}"})).results.map((n=>`\n            <article class="Character-item">\n                <a href="#/${n.id}/">\n                    <img src="${n.image}" alt="${n.name}">\n                     <div>   <h2>${n.name}</h2> </div>\n                </a>\n            </article>\n            `)).join("")}\n        \n        `;n.innerHTML=a}})()):"/:id"===d?(s?s.classList.add("inactive"):console.log(""),o?o.remove():console.log(),r?r.classList.add("inactive"):console.log(""),c.innerHTML+=await(async()=>{const n=a(),t=await e({id:n});return document.body.scrollTop=0,document.documentElement.scrollTop=0,`\n\n<div class="Characters-inner">\n\n    <article class="Character-card">\n\n        <div><h2 class="character-name">${t.name}</h2></div>\n        <img src="${t.image}" alt="${t.name}">\n        \n    </article>\n    \n    <article class="Character-info">\n       <div> <h2>Details</h2> </div>\n\n       <div class="info-container">\n            <h3><span>Episodes:</span> <span>${t.episode.length}</span></h3>\n            <h3><span>Status:</span> <span>${t.status}</span></h3>\n            <h3><span>Species:</span> <span>${t.species}</span></h3>\n            <h3><span>Gender:</span> <span>${t.gender}</span></h3>\n            <h3><span>Origin:</span> <span>${t.origin.name}</span></h3>\n            <h3><span>Last location:</span> <span>${t.location.name}</span></h3>\n       </div> \n    </article>\n\n    <a href="/">\n    <div class="button-principal character-button">\n        <h3>BACK</h3>\n    </div>\n</a>\n</div>\n\n`})()):"/search"===d?(o?o.remove():console.log(),s?s.classList.add("inactive"):console.log(""),i?i.remove():console.log(),r?r.classList.remove("inactive"):console.log(""),(async()=>{const n=t(),a=document.getElementById("contentSearch");if(""===a.innerHTML)try{const t=await e({prm:`name=${n}`});console.log(t);let c=`\n            \n            ${t.results.map((n=>`\n                <article class="Character-item">\n                    <a href="#/${n.id}/">\n                        <img src="${n.image}" alt="${n.name}">\n                         <div>   <h2>${n.name}</h2> </div>\n                    </a>\n                </article>\n                `)).join("")}\n            \n            `;a.innerHTML=c}catch(n){location.hash="#/error404/"}})()):(s?s.classList.add("inactive"):console.log(""),i?i.remove():console.log(),r?r.classList.add("inactive"):console.log(""),c.innerHTML+=await'\n\n<div class="error404-content">\n\n    <div class="error404-img">\n        <h2>404 NOT FOUND</h2>\n        <img src="./src/icons/rick.png" alt="rick sanchez">\n    </div>\n    <div class="error404-info">\n        <h2>Morty... this page doesn\'t exist in this universe.</h2>\n        <a href="/">\n            <div class="button-principal">\n                <h3>BACK TO HOME</h3>\n            </div>\n        </a>\n    </div>\n</div>\n\n')};let s=1,i=!0;const o=async function(n,{id:a,param:t}){const c=await e({id:a,prm:t}).then((n=>n.info.pages));if(s<c&&i){s++;let c=`\n        \n        ${(await e({prm:`page=${s}&${t}`,id:a})).results.map((n=>`\n            <article class="Character-item">\n                <a href="#/${n.id}/">\n                    <img src="${n.image}" alt="${n.name}">\n                     <div>   <h2>${n.name}</h2> </div>\n                </a>\n            </article>\n            `)).join("")}\n        \n    `;n.innerHTML+=c,i=!1}setTimeout((()=>{i=!0}),500)};window.addEventListener("load",c),window.addEventListener("hashchange",c),document.addEventListener("scroll",(async()=>{if(window.scrollY+window.innerHeight>=document.documentElement.scrollHeight)if(""===location.hash){const n=document.querySelector("#character");await o(n,{})}else if("search"===a()){const n=t(),e=document.querySelector("#contentSearch");await o(e,{param:`name=${n}`})}else console.log("no es el home")}))})();