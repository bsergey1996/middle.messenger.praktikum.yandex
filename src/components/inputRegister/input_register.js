import Handlebars from "handlebars";
import tpl from './input_register.hbs'
import './input_register.css'

Handlebars.registerPartial('input_register ', tpl());

export default (type,label,id) => {
    return Handlebars.compile(tpl(type,label,id))()
}