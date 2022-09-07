import router from './routes/index'
import { Home, observerScroll } from './pages/Home'


window.addEventListener('load', router);
window.addEventListener('hashchange', router);

document.addEventListener("scroll", observerScroll())

