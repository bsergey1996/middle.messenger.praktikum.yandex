import Handlebars from "handlebars";
import tpl from './registration.hbs' //bundle-text:
import './registration.css'
import input_register from '../../components/inputRegister/input_register.js'
//Handlebars.registerPartial('registration', tpl);

export default () => {
   // let template = 
   console.log(console.log('То что приходит из tpl в  pages/registration.js :', tpl())
   )
    return Handlebars.compile(tpl())
}