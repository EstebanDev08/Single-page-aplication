import router from './routes/index'
import observerScroll from "./utils/ObserverScroll"


window.addEventListener('load', router);
window.addEventListener('hashchange', router);

document.addEventListener("scroll", observerScroll())

