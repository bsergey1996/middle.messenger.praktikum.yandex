import main_page from "./src/pages/main_page/main_page";
import registration from "./src/pages/registration/registration.js"
import login from "./src/pages/login/login.js"
import chats from "./src/pages/chats/chats.js"
import chats_empty from "./src/pages/chats_empty/chats.js"
import settings_user from "./src/pages/settings_user/settings_user.js"
import error404 from "./src/pages/404/404.js"
import error500 from "./src/pages/500/500.js"
import './static/css/main.css'


window.addEventListener('DOMContentLoaded', () => {
   console.log(window.location.pathname);

   //console.log('То что приходит из registration() в  index.js ',registration()())

   if(window.location.pathname == '/index' || window.location.pathname == '/'){
      document.getElementById('app').innerHTML = main_page();
   }if(window.location.pathname == '/registration'){
      document.getElementById('app').innerHTML = registration();
   }if(window.location.pathname == '/login'){
      document.getElementById('app').innerHTML = login();
   }if(window.location.pathname == '/chats'){
      document.getElementById('app').innerHTML = chats();
   }if(window.location.pathname == '/chats_empty'){
      document.getElementById('app').innerHTML = chats_empty();
   }if(window.location.pathname == '/settings_user'){
      document.getElementById('app').innerHTML = settings_user();
   }if(window.location.pathname == '/404'){
      document.getElementById('app').innerHTML = error404();
   }if(window.location.pathname == '/500'){
      document.getElementById('app').innerHTML = error500();
   }
});





