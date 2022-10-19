import registration from "./src/pages/registration/registration"
import './static/css/main.css'

console.log(window.location.pathname)

console.log('То что приходит из registration() в  index.js ',registration())


if(window.location.pathname == '/registration'){
   document.getElementById('app').innerHTML = registration();
}


