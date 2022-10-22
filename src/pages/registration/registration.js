import Handlebars from "handlebars";
import tpl from './registration.hbs' //bundle-text:
import './registration.css'
import input_register from '../../components/inputRegister/input_register.js'

export default () => {
    Handlebars.registerPartial('input_register', input_register);
    return Handlebars.compile(tpl())();
}