import Handlebars from "handlebars";
import tpl from './input_setting.hbs'
import './input_setting.css'

Handlebars.registerPartial('input_setting ', tpl());

export default (type,label,id) => {
    return Handlebars.compile(tpl(type,label,id))()
}